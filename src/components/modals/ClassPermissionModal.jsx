import ReactModal from 'react-modal';
import ReactDatePicker from 'react-datepicker';
import { useParams } from 'react-router-dom';
import { ko } from 'date-fns/locale/ko';
import ExampleCustomInput from '../molecules/ExampleCustomInput';
import { editGroup } from '../../api/group';

/* overlay는 모달 창 바깥 부분을 처리하는 부분이고,
content는 모달 창부분이라고 생각하면 쉬울 것이다 */
const customModalStyles = {
  overlay: {
    backgroundColor: ' rgba(0, 0, 0, 0.4)',
    width: '100%',
    height: '100vh',
    zIndex: '10',
    position: 'fixed',
    top: '0',
    left: '0',
  },
  content: {
    width: '360px',
    height: '360px',
    zIndex: '150',
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    borderRadius: '10px',
    boxShadow: '2px 2px 2px rgba(0, 0, 0, 0.25)',
    backgroundColor: 'white',
    justifyContent: 'center',
    overflow: 'auto',
  },
};

function ClassPermissionModal({
  modalOpen,
  setModalOpen,
  startDate,
  setStartDate,
  groupAuthority,
  setGroupAuthority,
}) {
  const { id } = useParams();

  const handleColor = (time) =>
    time.getHours() > 12 ? 'text-success' : 'text-error';

  return (
    <ReactModal
      isOpen={modalOpen}
      onRequestClose={() => setModalOpen(false)}
      style={customModalStyles}
      shouldCloseOnOverlayClick={false}
    >
      <div className="flex flex-col items-center">
        <div className="mb-4">
          <div className="font-bold text-black text-center text-lg">
            마감 시간
          </div>
          <ReactDatePicker
            showTimeSelect
            selected={startDate}
            onChange={(date) => setStartDate(date)}
            onCalendarClose={() => {
              // api연결
            }}
            timeClassName={handleColor}
            customInput={<ExampleCustomInput startDate={startDate} />}
            locale={ko}
          />
        </div>
        <div className="mt-2">
          <div className="font-bold text-black text-center text-lg">
            그룹 프로젝트 권한 관리
          </div>
          <div className="flex mt-2 font-bold text-black text-md">
            <div className="ml-1 mr-4">
              <input
                type="radio"
                name="permission"
                id="public"
                value="public"
                className="mr-1"
                onChange={() => {
                  setGroupAuthority('Public');
                }}
                checked={groupAuthority === 'Public'}
              />
              <label htmlFor="public">PUBLIC</label>
            </div>
            <div>
              <input
                type="radio"
                name="permission"
                id="private"
                value="private"
                className="mr-1"
                onChange={() => {
                  setGroupAuthority('Private');
                }}
                checked={groupAuthority === 'Private'}
              />
              <label htmlFor="private">PRIVATE</label>
            </div>
          </div>
        </div>
        <div className="absolute bottom-8 flex justify-center">
          <button
            type="button"
            className="text-white font-bold w-[80px] py-1 rounded-2xl mt-12 bg-bjsBlue mr-2"
            onClick={() => {
              setModalOpen(false);
              // api 통신
              editGroup(id, startDate.toISOString(), groupAuthority);
            }}
          >
            저장
          </button>
          <button
            type="button"
            className="text-white font-bold w-[80px] py-1 rounded-2xl mt-12 bg-bjsBlue ml-2"
            onClick={() => {
              setModalOpen(false);
            }}
          >
            취소
          </button>
        </div>
      </div>
    </ReactModal>
  );
}

export default ClassPermissionModal;
