import { DepartmentDataPipe } from './department-data.pipe';

describe('DepartmentDataPipe', () => {
  it('create an instance', () => {
    const pipe = new DepartmentDataPipe();
    expect(pipe).toBeTruthy();
  });
});
