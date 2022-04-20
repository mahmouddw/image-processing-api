import resizeImg from '../utilities/resize';

//Testing for resizeImg function
it('should resize the image', async () => {
  const result = await resizeImg('fjord', 400, 300);
  expect(result).toContain('fjord400300.jpg');
});
