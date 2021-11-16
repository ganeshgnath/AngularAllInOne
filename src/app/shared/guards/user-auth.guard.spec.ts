import { AuthService } from './../../services/auth/auth.service';
// import { TestBed, async, inject } from '@angular/core/testing';

// import { UserAuthGuard } from './user-auth.guard';

// describe('UserAuthGuard', () => {
//   beforeEach(() => {
//     TestBed.configureTestingModule({
//       providers: [UserAuthGuard]
//     });
//   });

//   it('should ...', inject([UserAuthGuard], (guard: UserAuthGuard) => {
//     expect(guard).toBeTruthy();
//   }));
// });
import { TestBed, inject, getTestBed } from '@angular/core/testing';
import { UserAuthGuard } from './user-auth.guard';
import { Router } from '@angular/router';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('AuthGuard', () => {
  let injector: TestBed;
  let authService: AuthService
  let guard: UserAuthGuard;
  const routeMock: any = { snapshot: {}};
  const routeStateMock: any = { snapshot: {}, url: '/cookies'};
  const routerMock = {navigate: jasmine.createSpy('navigate')}

  beforeEach(() => {
  TestBed.configureTestingModule({
    providers: [UserAuthGuard, { provide: Router, useValue: routerMock }],
    imports: [HttpClientTestingModule]
  });
  injector = getTestBed();
  authService = injector.get(AuthService);
  guard = injector.get(UserAuthGuard);
});

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });

  it('should allow authenticated user to access the app', () => {
    spyOn(authService, 'isLoggedIn').and.returnValue(true);
    expect(guard.canActivate(routeMock, routeStateMock)).toEqual(true);
  });

  it('not should allow the unauthenticated user to access app', () => {
    expect(guard.canActivate(routeMock, routeStateMock)).toEqual(false);
    expect(routerMock.navigate).toHaveBeenCalledWith(['/login']);
  });
});
