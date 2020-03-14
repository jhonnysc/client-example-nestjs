import React from 'react';
import { useFormik, FormikProvider } from 'formik';
import * as Yup from 'yup';
import { useSelector, useDispatch } from 'react-redux';

import { sendCreateClientRequest } from '~/store/modules/clients/actions';
import { Container, Form } from './styles';

export default function Home() {
  const dispatch = useDispatch();
  const pending = useSelector(state => state.clients.clients.save.pending);

  const schema = Yup.object().shape({
    name: Yup.string().required('Nome é obrigatório'),
    document: Yup.string().required('Documento é obrigatório'),
    company: Yup.string().required('Empresa é obrigatório'),
    trading_name: Yup.string().required('Nome Fantasia é obrigatório'),
    country_code: Yup.string().required('Codigo do pais é obrigatório'),
    area_code: Yup.string().required('Codigo de area é obrigatório'),
    phone: Yup.string().required('Telefone é obrigatório'),
    email: Yup.string()
      .email('Email deve ser valido')
      .required('Email é obrigatório'),
    address: Yup.object().shape({
      street: Yup.string().required('Rua é obrigatório'),
      number: Yup.string().required('Numero é obrigatório'),
      zip_code: Yup.string().required('CEP é obrigatório'),
      address_type: Yup.string().required('Tipo de endereco é obrigatório'),
      reference: Yup.string(),
    }),
  });
  const onSubmit = form => {
    dispatch(sendCreateClientRequest(form));
  };

  const formikbag = useFormik({
    initialValues: {
      name: '',
      document: '',
      company: '',
      trading_name: '',
      country_code: '',
      area_code: '',
      phone: '',
      email: '',
      address: {
        street: '',
        number: '',
        zip_code: '',
        address_type: 'COMERCIAL',
        reference: '',
      },
    },
    validationSchema: schema,
    validateOnChange: false,
    onSubmit,
  });

  // React.useEffect(() => {
  //   console.log(formikbag.values);
  //   console.log(formikbag.errors);
  // }, [formikbag.values, formikbag.errors]);

  return (
    <Container>
      <FormikProvider value={formikbag}>
        <Form onSubmit={formikbag.handleSubmit}>
          <div>
            <section>
              <label htmlFor="email">Email</label>
              <input
                id="email"
                name="email"
                onChange={formikbag.handleChange}
              />
              <span>{formikbag.errors.email}</span>
            </section>
            <section>
              <label htmlFor="name">Nome</label>
              <input id="name" name="name" onChange={formikbag.handleChange} />
              <span>{formikbag.errors.name}</span>
            </section>

            <section>
              <label htmlFor="document">Documento</label>
              <input
                id="document"
                name="document"
                onChange={formikbag.handleChange}
              />
              <span>{formikbag.errors.document}</span>
            </section>

            <section>
              <label htmlFor="company">Empresa</label>
              <input
                id="company"
                name="company"
                onChange={formikbag.handleChange}
              />
              <span>{formikbag.errors.company}</span>
            </section>

            <section>
              <label htmlFor="trading_name">Nome Fantasia</label>
              <input
                id="trading_name"
                name="trading_name"
                onChange={formikbag.handleChange}
              />
              <span>{formikbag.errors.trading_name}</span>
            </section>

            <section>
              <label htmlFor="country_code">Codigo do pais</label>
              <input
                id="country_code"
                name="country_code"
                onChange={formikbag.handleChange}
              />
              <span>{formikbag.errors.country_code}</span>
            </section>

            <section>
              <label htmlFor="area_code">Codigo de Area</label>
              <input
                id="area_code"
                name="area_code"
                onChange={formikbag.handleChange}
              />
              <span>{formikbag.errors.area_code}</span>
            </section>

            <section>
              <label htmlFor="phone">Telefone</label>
              <input
                id="phone"
                name="phone"
                onChange={formikbag.handleChange}
              />
              <span>{formikbag.errors.phone}</span>
            </section>
          </div>
          <div>
            <section>
              <label htmlFor="address.street">Rua</label>
              <input
                id="address.street"
                name="address.street"
                onChange={formikbag.handleChange}
              />
              <span>
                {formikbag.errors.address && formikbag.errors.address.street}
              </span>
            </section>

            <section>
              <label htmlFor="address.number">Numero</label>
              <input
                id="address.number"
                name="address.number"
                onChange={formikbag.handleChange}
              />
              <span>
                {formikbag.errors.address && formikbag.errors.address.number}
              </span>
            </section>

            <section>
              <label htmlFor="address.zip_code">CEP</label>
              <input
                id="address.zip_code"
                name="address.zip_code"
                onChange={formikbag.handleChange}
              />
              <span>
                {formikbag.errors.address && formikbag.errors.address.zip_code}
              </span>
            </section>

            <section>
              <label htmlFor="address.reference">Referencia</label>
              <input
                id="address.reference"
                name="address.reference"
                onChange={formikbag.handleChange}
              />
              <span>
                {formikbag.errors.address && formikbag.errors.address.reference}
              </span>
            </section>

            <section>
              <label htmlFor="address.address_type">Tipo</label>
              <select
                id="address.address_type"
                name="address.address_type"
                onChange={formikbag.handleChange}
              >
                <option value="COMERCIAL">Comercial</option>
                <option value="RESIDENCIAL">Residencial</option>
              </select>
              <span>
                {formikbag.errors.address &&
                  formikbag.errors.address.address_type}
              </span>
            </section>
            <div>
              <button className="submit-button" type="submit">
                {pending ? 'SALVANDO...' : 'ENVIAR'}
              </button>
            </div>
          </div>
        </Form>
      </FormikProvider>
    </Container>
  );
}
