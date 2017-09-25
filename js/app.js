// Foundation JavaScript
// Documentation can be found at: http://foundation.zurb.com/docs
$(document).foundation();

$(document).ready(function() {
    $('.alert').click(function() {
        makeRaptor();
        var rythm = new Rythm();
        rythm.setMusic("bower_components/css-raptorize/media/rawr.mp3");
        //rythm.addRythm('rythm-custom', 'twist', 0, 10)
        rythm.addRythm('rythm-custom', 'jump', 0, 10, {
            min: -20,
            max: 20
          });
          rythm.addRythm('rythm-custom-2', 'jump', 0, 10, {
            min: 20,
            max: -20
          });
          rythm.addRythm('rythm-custom-3', 'jump', 0, 10, {
            min: 0,
            max: -40
          });
        rythm.start();
        setTimeout(function() {
            rythm.stop(false);            
          }, 4000);
    });        
});
