import instance from './instance';

const getuserInfo = (setUserInfo, setGrouplist, navigate) => {
  instance
    .get('/api/group')
    .then((groupResponse) => {
      instance
        .get('/api/user')
        .then((userResponse) => {
          setUserInfo({
            id: userResponse.id,
            password: '',
            name: userResponse.name,
            pId: userResponse.student_id,
          });
          setGrouplist(groupResponse.data);
        })
        .catch((error) => {
          if (error.response) {
            // 요청이 전송되었고, 서버는 2xx 외의 상태 코드로 응답했습니다.
            const errorStatus = Number(error.response.status);
            if (errorStatus >= 400 && errorStatus < 500) {
              // 클라이언트 요청 오류
              if (errorStatus === 404) {
                setTimeout(() => {
                  alert('메인 페이지로 이동합니다');
                  navigate('/landing');
                }, 3000);
                // 404 페이지로 이동
              }
            } else if (errorStatus >= 500) {
              setTimeout(() => {
                alert('메인 페이지로 이동합니다');
                navigate('/landing');
              }, 3000);
              // 500 페이지로 이동
            }
          } else if (error.request) {
            // 요청이 전송되었지만, 응답이 수신되지 않았습니다.
            // 'error.request'는 브라우저에서 XMLHtpRequest 인스턴스이고,
            // 보통 cors문제 or 네트워크 오류
            // console을 통해 개발자만 확인
            console.log(error.request);
          } else {
            // 오류가 발생한 요청을 설정하는 동안 문제가 발생했습니다.
            // console을 통해 개발자만 확인
            console.log('Error', error.message);
          }
        });
    })
    .catch((error) => {
      // if (error.response) {
      //   // 요청이 전송되었고, 서버는 2xx 외의 상태 코드로 응답했습니다.
      //   const errorStatus = Number(error.response.status);
      //   if (errorStatus >= 400 && errorStatus < 500) {
      //     // 클라이언트 요청 오류
      //     if (errorStatus === 404) {
      //       setTimeout(() => {
      //         alert('메인 페이지로 이동합니다');
      //         navigate('/landing');
      //       }, 3000);
      //       // 404 페이지로 이동
      //     }
      //   } else if (errorStatus >= 500) {
      //     setTimeout(() => {
      //       alert('메인 페이지로 이동합니다');
      //       navigate('/landing');
      //     }, 3000);
      //     // 500 페이지로 이동
      //   }
      // } else if (error.request) {
      //   // 요청이 전송되었지만, 응답이 수신되지 않았습니다.
      //   // 'error.request'는 브라우저에서 XMLHtpRequest 인스턴스이고,
      //   // 보통 cors문제 or 네트워크 오류
      //   // console을 통해 개발자만 확인
      //   console.log(error.request);
      // } else {
      //   // 오류가 발생한 요청을 설정하는 동안 문제가 발생했습니다.
      //   // console을 통해 개발자만 확인
      //   console.log('Error', error.message);
      // }
      console.log(error);
    });
};

export const isLogin = (navigate) => {
  instance
    .get('/api/user')
    .then(() => {
      navigate('/main');
    })
    .catch(() => {
      console.log('로그인 상태가 아닙니다.');
    });
};

export default getuserInfo;
