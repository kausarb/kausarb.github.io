import React, { Component } from "react";
import TodoList from "../src/components/ui/TodoList";
import StateProvider from "../src/components/wrappers/StateProvider";
import KeyStrokeHandler from "../src/components/wrappers/KeyStrokeHandler";

export default class App extends Component {
  render() {
    return (
      <StateProvider>
        <KeyStrokeHandler>
          <TodoList />
        </KeyStrokeHandler>
      </StateProvider>
    );
  }
}
