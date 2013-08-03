describe("app", function() {

  it("should contain all module definitions", function() {
    expect(APP.MAP).toBeDefined();
    expect(APP.FORECAST).toBeDefined();
    expect(APP.HELPERS).toBeDefined();
    expect(APP.SKYCONS).toBeDefined();            
  });

  it("map should contain all functions", function() {
    expect(APP.MAP.initialize).toBeDefined();
    expect(APP.MAP.display).toBeDefined();
    expect(APP.MAP.getGeo).toBeDefined();             
  });

  it("forecast should contain all functions", function() {
    expect(APP.FORECAST.get).toBeDefined();
    expect(APP.FORECAST.getData).toBeDefined();
    expect(APP.FORECAST.draw).toBeDefined();
    expect(APP.FORECAST.hide).toBeDefined();            
  });

  it("icons should contain all functions", function() {
    expect(APP.SKYCONS.initialize).toBeDefined();
    expect(APP.SKYCONS.add).toBeDefined();
    expect(APP.SKYCONS.play).toBeDefined();
    expect(APP.SKYCONS.pause).toBeDefined();
    expect(APP.SKYCONS.remove).toBeDefined();                 
  });

  it("helpers should contain all functions", function() {
    expect(APP.HELPERS.htmlEncode).toBeDefined();      
    expect(APP.HELPERS.htmlDecode).toBeDefined();
    expect(APP.HELPERS.forecastIOToSkycons).toBeDefined();         
  });

});