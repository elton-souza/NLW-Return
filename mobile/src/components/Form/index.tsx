import React from "react";
import { View, TextInput, Image, Text, TouchableOpacity } from "react-native";
import { ArrowLeft } from "phosphor-react-native";

import { styles } from "./styles";
import { theme } from "../../theme";
import { FeedbackType } from "../Widget";
import { feedbackTypes } from "../../utils/feedbackTypes";
import { ScreenshotButton } from "../ScreenshotButton";
import { Button } from "../Button";
interface Props {
  feedbackType: FeedbackType;
}

export function Form({ feedbackType }: Props) {
  const { title, image } = feedbackTypes[feedbackType];

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity>
          <ArrowLeft
            size={24}
            weight="bold"
            color={theme.colors.text_secondary}
          />
        </TouchableOpacity>

        <View style={styles.titleContainer}>
          <Image source={image} style={styles.image} />
          <Text style={styles.titleText}>{title}</Text>
        </View>
      </View>
      <TextInput
        multiline
        style={styles.input}
        placeholder="Algo não está funcionando bem? Queremos corrigir. Conte com detalhes o que está acontecendo..."
        placeholderTextColor={theme.colors.text_secondary}
      >
      </TextInput>
      <View style={styles.footer}>  
        <ScreenshotButton 
          screenshot="https://github.com/elton-souza.png" 
          onTakeShot={()=>{}} 
          onRemoveShot={()=>{}} 
        />
        <Button isLoading={false} />
      </View>
    </View>
  );
}
