const Index = require('../../index')
const s = require('superstruct')
const { Tz, consts } = require('../../structures/lib')
const ConstStruct = consts()

describe('Lib Phone object structure', () => {
  test('Success: Lib Phone structure', () => {
    for (const i of ['+3333333333', '003333333333', '+1 818 23424545']) {
      expect(RegExp(ConstStruct.pReg).test(i)).toBeTruthy()
    }
  })
  test('Failed: Lib Phone structure', () => {
    for (const i of ['??!!', '!3333333333', '818%%23424545']) {
      expect(RegExp(ConstStruct.pReg).test(i)).toBeFalsy()
    }
  })
})

describe('Lib Zoulou Date object structure', () => {
  test('Success: Lib Zoulou Date structure', () => {
    for (const i of ['2021-01-11T10:31:04.519Z', '2021-01-11T10:31:04Z']) {
      expect(RegExp(ConstStruct.zdReg).test(i)).toBeTruthy()
    }
  })
  test('Failed: Lib Zoulou Date structure', () => {
    for (const i of ['??!!', 'toto', '2021-01-11T10:31:04']) {
      expect(RegExp(ConstStruct.zdReg).test(i)).toBeFalsy()
    }
  })
})

describe('Lib ISO8601 Date object structure', () => {
  test('Success: Lib Zoulou Date structure', () => {
    for (const i of ['2021-01-11T10:31:04.519Z', '2021-01-11T10:31:04Z', '2021-01-11T10:31:04+01:00', '2021-01-11T10:31:04-01:00']) {
      expect(RegExp(ConstStruct.isoReg).test(i)).toBeTruthy()
    }
  })
  test('Failed: Lib Zoulou Date structure', () => {
    for (const i of ['??!!', 'toto', '2021-01-11T10:31:04']) {
      expect(RegExp(ConstStruct.isoReg).test(i)).toBeFalsy()
    }
  })
})

describe('Time zone string format', () => {
  test('Success: Tz is valid', () => {
    expect(s.is('Europe/Paris', Tz)).toBeTruthy()
  })

  test('Fail: Tz is no valid', () => {
    expect(s.is('America/Bulp', Tz)).toBeFalsy()
  })
})
