import { connect } from "react-redux";
import { addMessageActionCreator, onMessageChangeActionCreator } from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import { withAuthRedirec } from "../../hoc/withAuthRedirect";
import { compose } from "redux";

const mapStateToProps = (state) => ({
  dialogsPage: state.dialogsPage
});

const mapDispatchToProps = (dispatch) => ({
  AddMessage: (message) => {
    dispatch(addMessageActionCreator(message));
  },
});

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withAuthRedirec
)(Dialogs)