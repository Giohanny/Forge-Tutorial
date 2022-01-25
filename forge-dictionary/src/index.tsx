import ForgeUI, {
  render,
  Fragment,
  ContextMenu,
  Text,
  InlineDialog,
  useProductContext,
  useState,
  useAction,
  Form,
  TextArea,
  isContextMenuExtensionContext
} from "@forge/ui";
import { createContentProperty, updateContentProperty, getContentProperty } from "./api";
import { TermDescriptor, ContentData } from "./types";

const CONTENT_KEY = 'dictionary';

const updateDictionary = (
    contentId: string,
    key: string,
    contentData: ContentData,
    selectedText: string,
    data2store: TermDescriptor
) => {
  if (!contentData.id) {
    return createContentProperty(contentId, key, selectedText, data2store);
  } else {
    return updateContentProperty(contentId, key, contentData, selectedText, data2store);
  }
};

const ErrorMessage = ({ error }: { error: boolean }) => {
  if (error) {
    return (
        <Text content="Can't save definition, try again" format="plaintext" />
    );
  }
  return null;
};

const App = () => {
  const [error, setError] = useState(false);

  const { extensionContext, contentId } = useProductContext();

  let selectedText;
  if (isContextMenuExtensionContext(extensionContext)) {
    selectedText = extensionContext.selectedText;
  }

  if (!contentId) {
    return null;
  }

  const [contentData] = useAction(value => value, () => getContentProperty(contentId, CONTENT_KEY));

  const allDefinitions: TermDescriptor = contentData.value || {};
  const [activeDefinition, setActiveDefinition] = useState(selectedText ? allDefinitions[selectedText] : undefined);

  if (!selectedText) {
    return null;
  }

  return (
      <InlineDialog>
        {
          activeDefinition
              ?
              <Fragment>
                <Text content={`**${selectedText}**`} format="markdown"/>
                <Text content={activeDefinition.definition} format="plaintext"/>
              </Fragment>
              :
              <Form
                  onSubmit={async (formData) => {
                    const res = await updateDictionary(contentId, CONTENT_KEY, contentData, selectedText, formData as TermDescriptor);
                    if (!res) {
                      setError(true);
                    } else {
                      setActiveDefinition(res.value[selectedText]);
                      setError(false);
                    }
                  }}
                  submitButtonText="Add"
              >
                <Text content={`**${selectedText}**`} format="markdown"/>
                <ErrorMessage error={error}/>
                <TextArea
                    name="definition"
                    label="Definition"
                    isRequired
                    placeholder="What is the meaning of this term?"
                />
              </Form>
        }
      </InlineDialog>
  );
};

export const run = render(<ContextMenu><App /></ContextMenu>);
