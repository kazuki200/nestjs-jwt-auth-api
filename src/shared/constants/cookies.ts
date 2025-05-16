import { CookieOptions, Request } from 'express';

export const cookieConfig = {
  refreshToken: {
    name: 'refreshToken',
    options: {
      path: '/',
      httpOnly: true,
      sameSite: 'strict' as 'strict',
      secure: true,
      maxAge: 1000 * 60 * 60 * 24 * 30, // 30日
    } satisfies CookieOptions,
  },
};

export const extractRefreshTokenFromCookies = (req: Request) => {
  const cookies = req.headers.cookie?.split('; ');
  if (!cookies?.length) {
    return null;
  }

  const refreshTokenCookie = cookies.find((cookie) =>
    cookie.startsWith(`${cookieConfig.refreshToken.name}=`),
  );

  if (!refreshTokenCookie) {
    return null;
  }
  const refreshToken = refreshTokenCookie.split('=')[1] as string;

  return refreshToken;
};
