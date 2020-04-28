
export interface User {
  username?: string;
  email?: string;
  name?: string;
  password?: string;
  role?: [];
}

export interface JwtResponse {
  username: string;
  authorities: [
    {
      authority: string;
    }
  ];
    access_token: string;
    tokenType: string;

}
