import 'package:elibras_web/core/core.dart';
import 'package:elibras_web/home/home_repository.dart';
import 'package:elibras_web/home/home_state.dart';
import 'package:elibras_web/shared/models/answer_model.dart';
import 'package:elibras_web/shared/models/question_model.dart';
import 'package:elibras_web/shared/models/quiz_model.dart';
import 'package:elibras_web/shared/models/word_model.dart';
import 'package:flutter/foundation.dart';

class HomeController {
  ValueNotifier<HomeState> stateNotifier =
      ValueNotifier<HomeState>(HomeState.empty);
  set state(HomeState state) => stateNotifier.value = state;
  HomeState get state => stateNotifier.value;

  List<WordModel>? words;

  final repository = HomeRepository();

  Future<List<WordModel>> getWords() async {
    return repository.getWords();
  }
}
