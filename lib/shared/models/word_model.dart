import 'dart:convert';

class WordModel {
  final String id_dictionary;
  final String word_name;

  WordModel({
    required this.id_dictionary,
    required this.word_name,
  });

  Map<String, dynamic> toMap() {
    return {
      'id_dictionary': id_dictionary,
      'word_name': word_name,
    };
  }

  factory WordModel.fromMap(Map<String, dynamic> map) {
    return WordModel(
      id_dictionary: map['id_dictionary'],
      word_name: map['word_name'],
    );
  }

  String toJson() => json.encode(toMap());

  factory WordModel.fromJson(String source) => WordModel.fromMap(json.decode(source));
}
