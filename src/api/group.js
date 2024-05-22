import instance from './instance';

const getGroupList = (setGrouplist) => {
  instance
    .get('/api/group')
    .then((response) => {
      setGrouplist(response.data);
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

export const getMyGroupConfig = (navigate, setCanSave) => {
  instance
    .get('/api/group/find_by_user')
    .then((response) => {
      const { data } = response;
      const currentDate = new Date();
      const deadlineDate = new Date(data[0].deadline);
      const groupAuthority = data[0].authority;
      const { id } = data[0];

      if (currentDate <= deadlineDate) {
        console.log('현재 시간은 마감 시간 이전입니다.');
        return;
      }

      if (currentDate > deadlineDate && groupAuthority === 'Private') {
        setCanSave(false);
        return;
      }

      if (currentDate > deadlineDate && groupAuthority === 'Public') {
        navigate(`/group/${id}`);
      }
    })
    .catch((error) => {
      console.log(error);
    });
};

export const getMyGroupList = (setGrouplist) => {
  instance
    .get('/api/group/find_by_user')
    .then((response) => {
      setGrouplist(response.data);
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

export const editGroup = (groupId, deadline, authority) => {
  console.log(deadline);
  instance.put(`/api/group`, {
    groupId,
    deadline,
    authority,
  });
};
export default getGroupList;
