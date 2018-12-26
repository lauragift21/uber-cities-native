import React from "react";
import { Linking, Image } from "react-native";
import {
  Wrapper,
  Label,
  Input,
  InputWrapper,
  Algolia,
  Logo
} from "./Home.element";
import logo from "../../assets/logo.png";
import AlgoliaLogo from "../../assets/algolia.png";

export default class Home extends React.Component {
  state = { text: "" };

  static navigationOptions = {
    title: "Home",
    header: null
  };

  render() {
    return (
      <Wrapper>
        <Logo source={logo} />
        <Label>Is there Uber in</Label>
        <InputWrapper>
          <Input
            onSubmitEditing={() =>
              this.props.navigation.push("Search", { city: this.state.text })
            }
            onChangeText={text => this.setState({ text })}
          />
          <Label style={{ marginLeft: 10 }}>?</Label>
        </InputWrapper>
        <Algolia
          title="Search by Algolia"
          onPress={() => Linking.openURL("https://www.algolia.com")}
        >
          <Image source={AlgoliaLogo} />
        </Algolia>
      </Wrapper>
    );
  }
}
