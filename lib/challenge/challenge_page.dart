import 'package:elibras_web/challenge/challenge_controller/challenge_controller.dart';
import 'package:elibras_web/challenge/quiz/quiz_widget.dart';
import 'package:elibras_web/challenge/widgets/next_button/next_button_widget.dart';
import 'package:elibras_web/challenge/widgets/question_indicador/question_indicator_widget.dart';
import 'package:elibras_web/result/result_page.dart';
import 'package:elibras_web/shared/models/question_model.dart';
import 'package:flutter/material.dart';

class ChallengePage extends StatefulWidget {
  final List<QuestionModel> questions;
  final String title;
  ChallengePage({Key? key, required this.questions, required this.title})
      : super(key: key);

  @override
  _ChallengePageState createState() => _ChallengePageState();
}

class _ChallengePageState extends State<ChallengePage> {
  final controller = ChallengeController();
  final pageController = PageController();
  @override
  void initState() {
    pageController.addListener(() {
      controller.currentPage = pageController.page!.toInt() + 1;
    });
    super.initState();
  }

  void nextQuestion() {
    if (controller.currentPage < widget.questions.length)
      pageController.nextPage(
        duration: Duration(milliseconds: 100),
        curve: Curves.linear,
      );
  }

  void onSelected(bool value) {
    if (value) {
      controller.qtdeAnswerRight++;
    }
    nextQuestion();
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: PreferredSize(
        preferredSize: Size.fromHeight(102),
        child: SafeArea(
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
              IconButton(
                  icon: Icon(Icons.close),
                  onPressed: () => {
                        Navigator.pop(context),
                      }),
              Text(widget.title)
            ],
          ),
          top: true,
        ),
      ),
    );
  }
}
