import instance from './instance';

export const handleSaveProject = (formdata) => {
  instance
    .post('/api/project', formdata, {
      headers: {
        'Content-Type': 'multipart/form-data', // Content-Type을 반드시 이렇게 하여야 한다.
      },
    })
    .then(() => {
      alert('프로젝트 저장에 성공하였습니다.');
    })
    .catch(() => {
      alert('프로젝트 저장에 실패하였습니다');
    });
};

export const handleModifyProject = (formdata) => {
  instance
    .put('/api/project', formdata, {
      headers: {
        'Content-Type': 'multipart/form-data', // Content-Type을 반드시 이렇게 하여야 한다.
      },
    })
    .then(() => {
      alert('프로젝트 수정에 성공하였습니다.');
    })
    .catch(() => {
      alert('프로젝트 수정에 실패하였습니다');
    });
};

const getMyProject = (setProjectForm, setFiles, setIsFirst) => {
  instance
    .get('/api/project/own')
    .then((response) => {
      setIsFirst(false);
      setProjectForm(() => ({
        title: response.data.title,
        desc: response.data.desc,
        url: response.data.sub_domain,
      }));
      setFiles(() => ({
        staticFile: null,
        staticFileName: response.data.static_file_name,
        dynamicFile: null,
        dynamicFileName: response.data.dynamic_file_name,
      }));
    })
    .catch(() => {
      alert('프로젝트를 가져올 수 없습니다.');
    });
};

export const getProjectListByGroup = (
  setProjectDatas,
  id,
  navigate,
  setStartDate,
  setGroupAuthority,
  notify,
) => {
  instance
    .get('/api/group/find_by_user')
    .then((groupResponse) => {
      const { data } = groupResponse;
      const currentDate = new Date();
      const deadlineDate = new Date(data[0].deadline);
      const groupAuthority = data[0].authority;
      const role = localStorage.getItem('userRole');

      if (role === 'Admin') {
        console.log('교수님!!');
        instance
          .get(`/api/project/find_by_group?id=${id}`)
          .then((projectResponse) => {
            setProjectDatas(() => projectResponse.data);
            setStartDate(deadlineDate);
            setGroupAuthority(groupAuthority);
          })
          .catch(() => {
            console.log('프로젝트 리스트 받아오는데 실패');
          });
      } else if (role === 'User') {
        // 현재 시간이 마감 시간 이후인지 확인
        if (currentDate > deadlineDate) {
          console.log('현재 시간은 마감 시간 이후입니다.');
          instance
            .get(`/api/project/find_by_group?group_id=${id}`)
            .then((projectResponse) => {
              setProjectDatas(() => projectResponse.data);
              setStartDate(deadlineDate);
              setGroupAuthority(groupAuthority);
            })
            .catch((error) => {
              console.log('프로젝트 리스트 받아오는데 실패');
              alert(error.response.data.message);
            });
        } else {
          navigate('/main');
          console.log('현재 시간은 마감 시간 이전입니다.');
          notify();
        }
      }
    })
    .catch(() => {
      console.log('그룹 마감시간 받아오는데 실패');
    });
};

export const handleCheckDuplicatedUrl = (subDomain, setIsDuplicatedUrl) => {
  instance
    .get(`/api/project/validate_domain?domain=${subDomain}`)
    .then((response) => {
      if (response.data === true) {
        alert('url 중복체크에 성공하셨습니다.');
        setIsDuplicatedUrl(false);
      } else {
        alert('이미 존재하는 url입니다.');
      }
    })
    .catch((error) => {
      console.log(error);
    });
};

export default getMyProject;
