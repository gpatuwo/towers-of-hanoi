class HanoiView {
  constructor(game, $el){
    this.game = game;
    this.$el = $el;
  }

  setupTowers() {
    for(let i = 0; i < 3; i++){
      let $tower = $("<ul></ul>");
      $tower.addClass("tower");
      $tower.addClass("group");
      this.$el.append($tower);
      if (i === 0){
        for (let j =3; j > 0; j--){
          let $disc = $("<li></li>");
          $disc.addClass('disc');
          $disc.addClass(`d${j}`);
          $disc.text(`${j}`);
          $disc.attr({"pos":i, "val": j});
          $tower.append($disc);
        }
      }
    }
  }

  render(){

  }
}

module.exports = HanoiView;
