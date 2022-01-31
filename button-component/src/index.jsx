import ForgeUI, { render, Fragment, Button, Text, IssuePanel } from '@forge/ui';
import HipchatSdVideoIcon from '@atlaskit/icon/glyph/hipchat/sd-video';

const App = () => {
  return (
    <Fragment>
        <Button
          text="Giohanny 1"
          icon="add-circle"
          onClick={async()=>{void 0}
          }
          appearance='warning'
        />
        <Button
          text="Giohanny 2"
          icon="notification"
          onClick={async()=>{void 0}
          }
          appearance='danger'
        />
        <Button
          text="Giohanny 3"
          icon="like"
          onClick={async()=>{void 0}
          }
          appearance='link'
        />

      {/*<Text>Hello world!</Text>*/}
    </Fragment>
  );
};

export const run = render(
  <IssuePanel>
    <App />
  </IssuePanel>
);
