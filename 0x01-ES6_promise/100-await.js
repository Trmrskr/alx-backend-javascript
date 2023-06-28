import {uploadPhoto, createUser} from './utils'

export default async function asyncUploadUser() {
  return Promise.all([uploadPhoto(), createUser()])
    .then((res) => {

      let response = {
        photo: null,
        user: null
      };

      if (res[0])
	    response.photo = res[0];
      if (res[1])
	    response.user = res[1];

      return response;
    });
}
