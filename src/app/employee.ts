export interface IEmployee {
  code: string;
  name: string;
  gender: string;
  annualSalary: number;
  dateOfBirth: string;
  department?: string;

  //computeMonthlySalary(annualSalary: number): number;
}

/*Example class which implements IEmployee interface */
/*
export class Employee implements IEmployee {
  constructor(
    public code: string,
    public name: string,
    public gender: string,
    public annualSalary: number,
    public dateOfBirth: string
  ) {}

  computeMonthlySalary(annualSalary: number): number {
    return annualSalary / 12;
  }
}
*/
