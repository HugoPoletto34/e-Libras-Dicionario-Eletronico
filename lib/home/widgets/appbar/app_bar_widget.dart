import 'package:elibras_web/core/app_images.dart';
import 'package:elibras_web/core/core.dart';
import 'package:elibras_web/home/widgets/score_card/score_card_widget.dart';
import 'package:elibras_web/shared/models/word_model.dart';
import 'package:flutter/material.dart';

class AppBarWidget extends PreferredSize {
  final WordModel user;
  AppBarWidget({required this.user})
      : super(
            preferredSize: Size.fromHeight(250),
            child: Container(
                height: 210,
                child: Stack(
                  children: [
                    Container(
                      height: 161,
                      width: double.maxFinite,
                      decoration: BoxDecoration(
                        gradient: AppGradients.linear,
                      ),
                      child: Padding(
                        padding: const EdgeInsets.symmetric(horizontal: 24),
                        child: Row(
                          mainAxisAlignment: MainAxisAlignment.spaceBetween,
                          children: [
                            Text.rich(TextSpan(
                                text: "Olá, ",
                                style: AppTextStyles.title,
                                children: [
                                  TextSpan(
                                    text: user.id_dictionary,
                                    style: AppTextStyles.titleBold,
                                  )
                                ])),
                            Container(
                                width: 58,
                                height: 58,
                                decoration: BoxDecoration(
                                    borderRadius: BorderRadius.circular(10),
                                    image: DecorationImage(
                                        image: NetworkImage(user.word_name))))
                          ],
                        ),
                      ),
                    )
                
                  ],
                )));
}
