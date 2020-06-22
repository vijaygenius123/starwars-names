var expect = require('chai').expect
var starWarsNames = require('./index')

describe('starwars-names', function () {

    describe('all', () => {
        it('Should be an array of strings', () => {
            expect(starWarsNames.all).to.satisfy(isArrayOfStrings)

            function isArrayOfStrings(array) {
                return array.every(function (item) {
                    return typeof item === 'string'
                })
            }
        })

        it('Should contain `Luke Skywalker`', () => {
            expect(starWarsNames.all).to.include('Luke Skywalker')

        })
    })

    describe('random', () => {

        it('Should return a random item from  starWarsNames.all ', () => {
            var randomItem = starWarsNames.random()
            expect(starWarsNames.all).to.include(randomItem)

        })
    })

})