import instance from './instance';

const handleSaveProject = (formdata) => {
  instance
    .post('/api/group', formdata, {
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

export default handleSaveProject;
