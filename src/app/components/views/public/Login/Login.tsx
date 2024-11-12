import React, { useState } from 'react';
import { UserService } from '@services/api/UserService';
import InputField from '@components/shared/input/input';
import Button from '@components/shared/button/button';
import FormContainer from '@components/shared/form/formContainer';
import { colors } from '@styles/colors';
import ImageContent from '@components/shared/container/ImageContent';
import { useDispatch } from 'react-redux';
import { setUser } from '@domain/redux/states/userSlice';

const LoginForm: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    const credentials = { username: email, password: password };
    const userService = new UserService();

    const userProfile = await userService.authenticate(credentials);

    console.log('Usuario logueado:', userProfile);

    if (userProfile) {
      dispatch(setUser({
        id: userProfile.id,
        username: userProfile.username,
        email: userProfile.email,
        userType: userProfile.type,
        isAuthenticated: true,
        token: userProfile.token || null
      }));
    }

  };

  return (
    <div className="container-all-centered">
      <FormContainer title="Iniciar Sesión">
        <ImageContent src='https://cdn-icons-png.flaticon.com/512/5087/5087579.png' alt='40px' width={220}> 
        </ImageContent>
        <form style={{color: colors.text_normal_2}} onSubmit={handleLogin} className="space-y-8">
          <InputField
            label="Correo Electrónico"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="tu@email.com"
            required
          />
          <InputField
            label="Contraseña"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Contraseña"
            required
          />
          <Button label="Enviar" onClick={handleLogin} variant="primary" />
        </form>
      </FormContainer>
    </div>
  );
};

export default LoginForm;
