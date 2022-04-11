import 'dart:convert';

import 'package:dio/dio.dart';
import 'package:elibras_web/shared/models/quiz_model.dart';
import 'package:elibras_web/shared/models/word_model.dart';
import 'package:flutter/services.dart';

class HomeRepository {
  final Dio dio = Dio();

  Future<List<WordModel>> getWords() async {
    Response response = await dio
        .get("https://elibras-api.herokuapp.com/api/dicionario/palavra");
    final list = response.data as List;
    final quizzes = list.map((e) => WordModel.fromMap(e)).toList();
    return quizzes;
  }
}
