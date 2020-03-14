import {
  IsString,
  IsNotEmpty,
  Validate,
  ValidatorConstraint,
  ValidatorConstraintInterface,
  validate as validator,
  IsEmail,
  IsIn,
  IsOptional,
} from 'class-validator';
import { Exclude, plainToClass, Expose, Type } from 'class-transformer';

class ClientAddressDTO {
  @IsString()
  @IsNotEmpty()
  street: string;

  @IsString()
  @IsNotEmpty()
  number: string;

  @IsString()
  @IsNotEmpty()
  zip_code: string;

  @IsString()
  @IsNotEmpty()
  @IsIn(['COMERCIAL', 'RESIDENCIAL'])
  address_type: string;

  @IsString()
  @IsOptional()
  reference: string;

  @IsString()
  @IsOptional()
  address_details: string;
}

@ValidatorConstraint({ name: 'CreateAddress', async: false })
class CreateAddressValidate implements ValidatorConstraintInterface {
  message: string;
  async validate(payload: object) {
    if (payload && typeof payload === 'object') {
      const errors = await validator(plainToClass(ClientAddressDTO, payload));
      if (errors.length > 0)
        this.message =
          errors[0].constraints[Object.keys(errors[0].constraints)[0]];
      return errors.length === 0;
    }
    this.message = 'address cannot be empty';
    return false;
  }

  defaultMessage() {
    return this.message;
  }
}

export class CreateClientDTO {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  document: string;

  @IsString()
  @IsNotEmpty()
  company: string;

  @IsString()
  @IsNotEmpty()
  trading_name: string;

  @IsString()
  @IsNotEmpty()
  country_code: string;

  @IsString()
  @IsNotEmpty()
  area_code: string;

  @IsString()
  @IsNotEmpty()
  phone: string;

  @IsEmail()
  @IsNotEmpty()
  email: string;

  @Validate(CreateAddressValidate)
  address: ClientAddressDTO;
}

@Exclude()
export class CreateClientResponseDTO {
  @Expose()
  name: string;

  @Expose()
  document: string;

  @Expose()
  company: string;

  @Expose()
  trading_name: string;

  @Expose()
  country_code: string;

  @Expose()
  area_code: string;

  @Expose()
  phone: string;

  @Expose()
  email: string;

  @Expose()
  address: ClientAddressDTO;

  @Expose()
  created_at: string;

  @Expose()
  updated_at: string;
}
