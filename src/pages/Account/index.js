import React, { useState, useEffect } from "react";
import Modal from "react-modal";
import jwt_decode from "jwt-decode";
import _ from "lodash";
import { useSelector, useDispatch } from "react-redux";
import Navbar from "../../components/Navbar";
import Swal from "sweetalert2";
import "./Account.scss";
import Loading from "../../components/LoadingBar/loading";

import {
  deleteAccount,
  getUserData,
  patchUserData,
  uploadPhoto,
  patchNewPassword,
} from "../../redux/User/Actions";

export const MODAL_CHANGE_EMAIL = 1;
export const MODAL_CHANGE_PASSWORD = 2;
export const MODAL_DELETE_ACCOUNT = 3;

Modal.setAppElement("#root");

export default function Account() {
  const token = localStorage.getItem("token");
  const user = useSelector((state) => state.users.userData);
  const isUserLoading = useSelector((state) => state.users.isUserLoading);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUserData(token));
  }, [dispatch, token]);

  const [photoData, setPhotoData] = useState(null);
  const [photoURL, setPhotoURL] = useState(null);
  const [newUserData, setnewUserData] = useState({
    name: "",
    company_name: "",
    role: "",
    industry: "",
  });

  const [newEmail, setnewEmail] = useState({
    email: "",
  });

  const [NewPassword, setNewPassword] = useState({
    current_password: "",
    new_password: "",
  });

  const handleNewPassword = (event) => {
    setNewPassword({
      ...NewPassword,
      [event.target.name]: event.target.value,
    });
  };

  const submitNewPassword = (e) => {
    e.preventDefault();
    const body = {
      current_password: NewPassword.current_password,
      new_password: NewPassword.new_password,
    };
    dispatch(patchNewPassword(token, body));
  };

  const handleUploadPhoto = () => {
    const data = new FormData();
    data.append("photo", photoData);
    dispatch(uploadPhoto(token, data));
  };

  const handleChangeData = (event) => {
    setnewUserData({
      ...newUserData,
      [event.target.name]: event.target.value,
    });
  };

  const handleChangeEmail = (event) => {
    setnewEmail({
      ...newEmail,
      [event.target.name]: event.target.value,
    });
  };

  const submitChangeEmail = (e) => {
    e.preventDefault();
    const dataEmail = new FormData();
    dataEmail.append("email", newEmail.email);
    dispatch(patchUserData(token, dataEmail));
  };

  const handleuserData = () => {
    const dataNew = new FormData();
    dataNew.append("name", newUserData.name);
    dataNew.append("company_name", newUserData.company_name);
    dataNew.append("industry", newUserData.industry);
    dataNew.append("role", newUserData.role);
    dispatch(patchUserData(token, dataNew));
  };

  const submitChangeProfile = async () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You still able to change it later on",
      icon: "question",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, update my profile!",
    }).then((result) => {
      if (result.isConfirmed) handleUploadPhoto();
      handleuserData();
      if (result === 200) {
        Swal.fire("Success!", "Your profile is updated", "success");
      }
    });
  };
  const submitDeleteAccount = () => {
    dispatch(deleteAccount(token));
  };

  let decoded;
  if (token && !_.isEmpty(token)) decoded = jwt_decode(token);

  const [isOpen, setIsOpen] = useState(false);
  const [whichModal, setWhichModal] = useState(null);

  function toggleModal() {
    setIsOpen(!isOpen);
  }
  return (
    <>
      <Navbar />
      {isUserLoading ? (
        <Loading />
      ) : (
        <div className="Account-background-page">
          <div className="Account-container">
            <div className="Upper-part">
              <p className="Your-photo">Your Photo</p>

              <div>
                {!photoURL ? (
                  <div>
                    <input
                      className="select-new-photo"
                      type="file"
                      id="upload"
                      onChange={(event) => {
                        setPhotoData(event.target.files[0]);
                        setPhotoURL(URL.createObjectURL(event.target.files[0]));
                      }}
                    />
                    <label htmlFor="upload">
                      <img
                        src={user.photo}
                        className="profile-photo-show"
                        alt="avatar"
                      ></img>
                    </label>
                  </div>
                ) : (
                  <>
                    <div>
                      <img
                        className="profile-photo-show"
                        src={photoURL}
                        alt=""
                      />
                      <button
                        className="Selected-upload-photo"
                        onClick={() => setPhotoURL(null)}
                      >
                        remove image
                      </button>
                    </div>
                  </>
                )}
              </div>
            </div>

            <div className="Account-details-container">
              <div className="Account-details-A">
                <label for="Name" className="Account-details-label">
                  name
                </label>
                <input
                  className="Account-details-input"
                  type="text"
                  id="name"
                  name="name"
                  defaultValue={user.name}
                  onChange={(event) => handleChangeData(event)}
                ></input>

                <label for="Company Name" className="Account-details-label">
                  Company Name
                </label>
                <input
                  className="Account-details-input"
                  type="text"
                  id="company_name"
                  name="company_name"
                  onChange={(event) => handleChangeData(event)}
                  defaultValue={user.company_name}
                />
              </div>
              <div className="Account-details-B">
                <label for="Industry" className="Account-details-label">
                  Industry
                </label>

                <select
                  className="Account-details-input"
                  name="industry"
                  id="industry"
                  onChange={(event) => handleChangeData(event)}
                  defaultValue={user.industry}
                >
                  {/* <option disabled hidden value=""></option> */}
                  <option value="Education">Education</option>
                  <option value="Health Services">Health Services</option>
                  <option value="Tourism">Tourism</option>
                  <option value="Transportation">Transportation</option>
                  <option value="Public Services">Public Services</option>
                  <option value="Telecomunications">Telecomunications</option>
                  <option value="Agliculture">Agliculture</option>
                  <option value="Others">Others</option>
                </select>
                <label for="Role" className="Account-details-label">
                  Role
                </label>
                <select
                  className="Account-details-input"
                  name="role"
                  id="role"
                  onChange={(event) => handleChangeData(event)}
                  defaultValue={user.role}
                >
                  <option disabled hidden value=""></option>
                  <option value="Owner">Owner</option>
                  <option value="Employee">Employee</option>
                  <option value="Director">Director</option>
                  <option value="Manager">Manager</option>
                  <option value="Supervisor">Supervisor</option>
                </select>
              </div>
              <button
                className="Submit-change-profile"
                onClick={submitChangeProfile}
              >
                Save changes
              </button>
            </div>

            <hr className="line1"></hr>
            <div className="bottom-part1">
              <div className="Account-email-details">
                <p style={{ fontWeight: "bolder", paddingBottom: "4px" }}>
                  Email Address
                </p>
                <p>
                  Your email address is: &nbsp;
                  <span style={{ fontWeight: "bolder" }}>{user.email}</span>
                </p>
              </div>

              <button
                type="button"
                className="Change-email-btn"
                onClick={() => {
                  setIsOpen(true);
                  setWhichModal(MODAL_CHANGE_EMAIL);
                }}
              >
                <a>Change</a>
              </button>
            </div>
            <hr className="line2"></hr>
            <div className="bottom-part2">
              <p className="Account-password-details">Change Password</p>
              <button
                type="button"
                className="Change-password-btn"
                onClick={() => {
                  setIsOpen(true);
                  setWhichModal(MODAL_CHANGE_PASSWORD);
                }}
              >
                <a className="Upload-details">Change</a>
              </button>
            </div>
            <hr className="line3"></hr>
            <div className="bottom-part3">
              <p className="Delete-your-account">Delete your account</p>
              <button
                type="button"
                className="Delete-account-btn"
                onClick={() => {
                  setIsOpen(true);
                  setWhichModal(MODAL_DELETE_ACCOUNT);
                }}
              >
                <a className="Upload-delete">Delete</a>
              </button>
            </div>
          </div>
          <div>
            <Modal
              className="modal-container"
              overlayClassName="modal-overlay-center"
              isOpen={isOpen}
              onRequestClose={toggleModal}
              contentLabel="Account"
              closeTimeoutMS={100}
            >
              {renderWhichModal()}
            </Modal>
          </div>
        </div>
      )}
    </>
  );

  function renderWhichModal() {
    switch (whichModal) {
      case MODAL_CHANGE_EMAIL:
        return (
          <div className="Account-modal-container">
            <form className="Account-modal-form">
              <h1 className="change-email_h1">Change Email</h1>
              <p className="delete_account_p">
                You might've had your email address for years, so everyone knows
                it. But let's say you want to change the name associated with
                that address.
              </p>
              <input
                className="change-email-form-input"
                type="email"
                name="email"
                placeholder="Enter your new email"
                onChange={(event) => handleChangeEmail(event)}
              />

              <button
                className="delete-account-form-submit"
                type="submit"
                onClick={submitChangeEmail}
              >
                Change Email
              </button>
            </form>
          </div>
        );
      case MODAL_CHANGE_PASSWORD:
        return (
          <div className="Account-modal-container">
            <form className="Account-modal-form">
              <h1 className="change-password_h1">Change Password</h1>
              <input
                className="Account-modal-form-input"
                type="password"
                name="current_password"
                placeholder="Enter your current password"
                onChange={(event) => handleNewPassword(event)}
              />
              <br></br>
              <input
                className="Account-modal-form-input"
                type="password"
                name="new_password"
                placeholder="Enter your new password"
                onChange={(event) => handleNewPassword(event)}
              />

              <button
                className="change-password-form-submit"
                type="submit"
                onClick={submitNewPassword}
              >
                Change Password
              </button>
            </form>
          </div>
        );
      case MODAL_DELETE_ACCOUNT:
        return (
          <div className="Account-modal-container">
            <form className="Account-modal-form">
              <h1 className="delete_account_h1">
                Are you sure to delete your account permanently?
              </h1>
              <p className="delete_account_p">
                Deleting your account is permanent and will remove all content
                including Tasks, comments and profile settings. Are you sure you
                want to delete your account?
              </p>

              <button
                className="delete-account-form-submit"
                type="button"
                onClick={submitDeleteAccount}
              >
                Delete account
              </button>
            </form>
          </div>
        );
      default:
        break;
    }
  }
}
