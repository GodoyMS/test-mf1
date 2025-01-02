import React from 'react';
import { Input } from '@/presentation/components/ui/input';
import { Label } from '@/presentation/components/ui/label';
import { accounts } from '@/lib/config/authConfig';
import { Button } from '../components/ui/button';
import { useTitle } from '../contexts/titleContext';

const ProfilePage: React.FC = () => {
  const { setTitle } = useTitle();
  setTitle('PERFIL');
  const account = accounts[0];
  const goBack = () => {
    window.history.back();
  };
  return (
    <div className="p-4">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
        {/* Nombre de la librería y Versión */}
        <div className="md:col-span-2">
          <Label htmlFor="name" className="mb-2">
            Nombres
          </Label>
          <Input
            id="name"
            placeholder="Nombres"
            className="border rounded px-4 py-2 w-full mt-1"
            disabled
            value={account.name?.split(' ')[0]}
          />
        </div>
        <div className="md:col-span-2">
          <Label htmlFor="apellidos" className="mb-2">
            Apellidos
          </Label>
          <Input
            id="apellidos"
            placeholder="Apellidos"
            className="border rounded px-4 py-2 w-full mt-1"
            disabled
            value={account.name?.split(' ')[1]}
          />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
        {/* Nombre de la librería y Versión */}
        <div className="md:col-span-2">
          <Label htmlFor="organizacion" className="mb-2">
            Organizacion
          </Label>
          <Input
            id="organizacion"
            placeholder="Organizacion"
            className="border rounded px-4 py-2 w-full mt-1"
            disabled
            value="INETUM"
          />
        </div>
        <div className="md:col-span-2">
          <Label htmlFor="cargo" className="mb-2">
            Cargo
          </Label>
          <Input
            id="cargo"
            placeholder="Cargo"
            className="border rounded px-4 py-2 w-full mt-1"
            disabled
            value="Software Engineer"
          />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        <div className="col-span-2">
          <Label htmlFor="correo" className="mb-2">
            Correo
          </Label>
          <Input
            id="correo"
            placeholder="Correo"
            className="border rounded px-4 py-2 w-full mt-1"
            disabled
            value={account.username}
          />
        </div>
      </div>
      <div className="flex justify-center mt-4">
        <Button
          onClick={goBack}
          className="bg-blue-500 text-white px-6 py-3 rounded text-lg font-bold"
        >
          Regresar
        </Button>
      </div>
    </div>
  );
};

export default ProfilePage;
