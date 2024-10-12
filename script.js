function credits() {
    var currentAudio = document.getElementById('backgroundMusic');
    var otherAudio = document.getElementById('otherAudio');
    
    currentAudio.play().catch(function(error) {
        console.error('Não foi possível reproduzir a música:', error);
        
    });
    
}
