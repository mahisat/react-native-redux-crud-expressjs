import React, {useState} from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import MyHeader from '../components/MyHeader';
import {useNavigation} from '@react-navigation/native';
import {Form, Item, Input, Label, Textarea, Button} from 'native-base';
import {addQuote, updateQuote} from '../actions';
import {useDispatch} from 'react-redux';

export const QuoteForm = (props) => {
  const navigation = useNavigation();
  const {quoteParams} = props.route.params;

  const [author, setAuthor] = useState(quoteParams ? quoteParams.author : '');
  const [quote, setQuote] = useState(quoteParams ? quoteParams.quote : '');
  const dispatch = useDispatch();
  const onSubmit = () => {
    let edit = quoteParams !== undefined;
    edit
      ? dispatch(
          updateQuote({quote: quote, author: author, id: quoteParams.id}),
        )
      : dispatch(
          addQuote({
            quote: quote,
            author: author,
            id: Math.floor(Math.random() * 90000) + 10000,
          }),
        );

    navigation.goBack();
  };
  return (
    <View style={styles.container}>
      <MyHeader title={'Add Quote'} back={() => navigation.goBack()} />
      <ScrollView style={{margin: 20}}>
        <Item stackedLabel>
          <Label>Author</Label>
          <Input value={author} onChangeText={(text) => setAuthor(text)} />
        </Item>
        <Textarea
          rowSpan={5}
          bordered
          placeholder="Quote"
          onChangeText={(text) => setQuote(text)}
          value={quote}
        />
        <Button style={styles.buttonCointainer} block onPress={onSubmit}>
          <Text style={styles.buttonText}> Save </Text>
        </Button>
      </ScrollView>
    </View>
  );
};
export default QuoteForm;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  buttonCointainer: {
    backgroundColor: '#ff6347',
    margin: 10,
  },
  buttonText: {
    color: '#fff',
  },
});
