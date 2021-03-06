/**
 * Main application controller
 *
 * You can use this controller for your whole app if it is small
 * or you can have separate controllers for each logical section
 * 
 */
;(function() {

  angular
    .module('ConnectifyWeb')
    .controller('MainController', MainController);

  MainController.$inject = ['LocalStorage', 'QueryService'];


  function MainController(LocalStorage, QueryService) {

    // 'controller as' syntax
    var self = this;

    var uuid = function () {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
            var r = Math.random()*16|0, v = c == 'x' ? r : (r&0x3|0x8);
            return v.toString(16);
        });
    };
  
    var visitor_id = null, 
        visit_count = 0, 
        user_rating = null;

    if( LocalStorage.exists() ) {

      visitor_id = LocalStorage.get( 'visitor_id' );
      visit_count = LocalStorage.get( 'visit_count' );
      user_rating = LocalStorage.get( 'user_rating' );

      if( !visitor_id ) { // new visitor
        LocalStorage.set( 'visitor_id' , uuid());
        LocalStorage.set( 'visit_count' , 1);

        navigator.geolocation.getCurrentPosition( function(position) {
          LocalStorage.set( 'latitude' , position.coords.latitude);
          LocalStorage.set( 'longitude' , position.coords.longitude);
        });
        
      } else {
        LocalStorage.update( 'visit_count' , ++visit_count);

        navigator.geolocation.getCurrentPosition( function(position) {
          LocalStorage.update( 'latitude' , position.coords.latitude);
          LocalStorage.update( 'longitude' , position.coords.longitude);
        });
      }

    } else {
      // No LocalStorage; Use Cookies;

      visitor_id = Cookies.get( 'visitor_id' );
      visit_count = Cookies.get( 'visit_count' );
      user_rating = Cookies.get( 'user_rating' );

      if( !visitor_id ) { // new visitor; Expire cookie after a year
        Cookies.set( 'visitor_id', uuid(), { expires: 365 }); 
      } 
        
      Cookies.set( 'visit_count', ++visit_count, { expires: 365 });

      navigator.geolocation.getCurrentPosition( function(position) {
        Cookies.set( 'latitude', position.coords.latitude, { expires: 365 });
        Cookies.set( 'longitude', position.coords.longitude, { expires: 365 });
      });
      
    }   

    // Update database with visit_count and user_rating; send new data to server.
  

    ////////////  function definitions


    /**
     * Load some data
     * @return {Object} Returned object
     */
    // QueryService.query('GET', 'posts', {}, {})
    //   .then(function(ovocie) {
    //     self.ovocie = ovocie.data;
    //   });
  }

})();