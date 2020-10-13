import React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import Toast from "./Toast";
import { removeToast } from "../actions/toasts";

let Toasts = ({actions,toasts}) => {
  const {removeToast} = actions;
  return(
    <ul>
      {toasts.map(toast => {
        const{id} = toast;
        return(
          <Toast {...toast} key={id} onDismissClick={() => removeToast(id)}/>
        )
      })}
    </ul>
  )
}

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({ removeToast }, dispatch)
});

const mapStateToProps = state => ({
  toasts: state.toasts
});

export default connect(mapStateToProps, mapDispatchToProps)(Toasts);