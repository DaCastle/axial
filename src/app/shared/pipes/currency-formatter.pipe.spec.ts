import { CurrencyFormatterPipe } from './currency-formatter.pipe';

describe('CurrencyFormatterPipe', () => {
  let pipe: CurrencyFormatterPipe;

  beforeEach(() => {
    pipe = new CurrencyFormatterPipe();
  });

  it('should create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('should format number with commas', () => {
    expect(pipe.transform(1000)).toBe('1,000');
    expect(pipe.transform(1000000)).toBe('1,000,000');
    expect(pipe.transform(123456789)).toBe('123,456,789');
  });

  it('should format string input with commas', () => {
    expect(pipe.transform('1000')).toBe('1,000');
    expect(pipe.transform('1000000')).toBe('1,000,000');
    expect(pipe.transform('123456789')).toBe('123,456,789');
  });

  it('should handle input with suffixes', () => {
    expect(pipe.transform('1k')).toBe('1,000');
    expect(pipe.transform('1m')).toBe('1,000,000');
    expect(pipe.transform('1b')).toBe('1,000,000,000');
    expect(pipe.transform('1t')).toBe('1,000,000,000,000');
  });

  it('should handle input with decimals', () => {
    expect(pipe.transform('1.5k')).toBe('1,500');
    expect(pipe.transform('0.5m')).toBe('500,000');
    expect(pipe.transform('0.123b')).toBe('123,000,000');
  });

  it('should handle empty or null input', () => {
    expect(pipe.transform('')).toBe('');
  });

  it('should handle invalid input', () => {
    expect(pipe.transform('invalid')).toBe('NaN');
    expect(pipe.transform('abc')).toBe('NaN');
  });
});
