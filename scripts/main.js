$(function(){
  var t = new Trianglify({x_gradient: Trianglify.colorbrewer.Oranges[9], cellsize: 250, cellpadding: 50, noiseIntensity: 0.35})
  // var pattern = t.generate($('body').width(), $('.wrapper').height() + 500)
  var pattern = t.generate( $('body').width(), $('body').height() )
  $('body').css('background-image', pattern.dataUrl)  
})