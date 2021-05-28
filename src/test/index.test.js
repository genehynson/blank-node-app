import {myFn} from '../index'
describe('index tests', () => {
    describe('myFn', () => {
        it('returns 1', () => {
            expect(myFn()).toEqual(1)
        })
    })
})