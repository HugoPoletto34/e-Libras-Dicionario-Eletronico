import 'package:elibras_web/home/home_repository.dart';
import 'package:rxdart/rxdart.dart';

class nossoBloc {
  final _service = HomeRepository();
  final _controlador = BehaviorSubject();

  Stream get saida => _controlador.stream;
  Sink get entrada => _controlador.sink;

  getWords() async {
    await _service.getWords().then(entrada.add);
  }

  void dispose() {
    _controlador.close();
  }
}
