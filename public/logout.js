    $('#logout').click(function(){
        firebase.auth().signOut()
        window.location.href = '/index.html'
    })