export class Palavra {
  nomePalavra: string;
  descPalavra: string;
  imageFileName: string;
  videoFileName: string;

  constructor(nomePalavra: string, descPalavra: string, imageFileName: string, videoFileName: string, ) {
    this.nomePalavra = nomePalavra;
    this.descPalavra = descPalavra;
    this.imageFileName = imageFileName;
    this.videoFileName = videoFileName;
  }
}