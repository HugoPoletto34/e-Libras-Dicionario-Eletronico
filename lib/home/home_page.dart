import 'package:elibras_web/bloc/block.dart';
import 'package:elibras_web/challenge/challenge_page.dart';
import 'package:elibras_web/home/home_controller.dart';
import 'package:elibras_web/home/widgets/quiz_card/quiz_card_widget.dart';
import 'package:elibras_web/shared/models/word_model.dart';
import 'package:flutter/material.dart';

class HomePage extends StatefulWidget {
  const HomePage({Key? key}) : super(key: key);

  @override
  State<HomePage> createState() => _HomePageState();
}

class _HomePageState extends State<HomePage> {
  final controller = HomeController();

  @override
  void initState() {
    super.initState();
    controller.stateNotifier.addListener(() {
      setState(() {});
    });
  }

  // @override
  // Widget build(BuildContext context) {
  //   return Scaffold(
  //       appBar: AppBar(
  //         title: Text("E-Libras"),
  //       ),
  //       body: ListView(
  //         padding: EdgeInsets.all(20),
  //         children: controller.words
  //           .map((e) => QuizCardWidget(
  //             title: e.word_name,

  //             onTap: () {}
  //         )).toList()
  //       ),
  //   );
  // }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
        appBar: AppBar(
          title: Text("e-Libras"),
        ),
        body: FutureBuilder<List<WordModel>>(
          future: controller.getWords(),
          builder: (context, snapshot) {
            if (snapshot.hasData) {
              return ListView(
                  padding: EdgeInsets.all(20),
                  children: snapshot.data!
                      .map((e) => QuizCardWidget(
                            title: e.word_name,
                            onTap: () {
                              Navigator.push(
                                  context,
                                  MaterialPageRoute(
                                      builder: (context) => ChallengePage(
                                            questions: [],
                                            title: e.word_name,
                                          )));
                            },
                          ))
                      .toList());
            } else {
              return Center(
                child: Text("Carregando..."),
              );
            }
          },
        ));
  }

  // final _bloc = nossoBloc();
  //  @override
  // Widget build(BuildContext context) {
  //   return Scaffold(
  //     appBar: AppBar(
  //       title: Text("Github Search"),
  //     ),
  //     body: ListView(
  //       children: <Widget>[
  //         StreamBuilder<WordModel>(
  //           stream: _bloc.saida,
  //           builder:
  //               (BuildContext context, AsyncSnapshot<WordModel> snapshot) {
  //             return snapshot.hasData
  //                 ? ListView.builder(
  //                     shrinkWrap: true,
  //                     physics: ClampingScrollPhysics(),
  //                     itemCount: snapshot.data..length,
  //                     itemBuilder: (BuildContext context, int index) {
  //                       SearchItem item = snapshot.data.items[index];
  //                       return _items(item);
  //                     },
  //                   )
  //                 : Center(child: CircularProgressIndicator());
  //           },
  //         )
  //       ],
  //     ),
  //   );
  // }
}
