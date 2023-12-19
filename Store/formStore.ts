import { proxy } from "valtio";

interface IFormStore {
  email: string;
  name: string;
  address: string;
  phone: string;
  setEmail: (text: string) => void;
  setName: (text: string) => void;
  setAddress: (text: string) => void;
  setPhone: (text: string) => void;
}

export const FormStore = proxy<IFormStore>({
  email: "",
  address: "",
  phone: "",
  name: "",
  setEmail(text) {
    this.email = text;
  },
  setName(text) {
    this.name = text;
  },
  setPhone(text) {
    this.phone = text;
  },
  setAddress(text) {
    this.address = text;
  },
});
