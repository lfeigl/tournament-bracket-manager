module.exports = (app) => {
    app.controller('ParticipantsCtrl', function () {
        const vm = this;

        vm.addParticipant = addParticipant;

        function addParticipant (input) {
            console.log(input);
        }
    });
};
