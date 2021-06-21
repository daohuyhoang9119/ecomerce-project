import React from "react";
// import useValidate from "../../../core/useValidate";
import { useDispatch } from "react-redux";
import { useTranslate } from "../../../core/Translate";
import { loginAction } from "../../../redux/reducer/authReducer";
import { useForm, ErrorMessage } from "../../../core/useform";

function LogIn() {
  let { t } = useTranslate();
  let dispatch = useDispatch();
  //form
  // const { form, error, inputOnChange, check } = useValidate(
  // {
  //   username: "",
  //   password: "",
  // },
  // {
  //   rule: {
  //     username: {
  //       require: true,
  //       pattern: "email",
  //     },
  //     password: {
  //       require: true,
  //       min: 6,
  //       max: 32,
  //     },
  //   },
  //   message: {
  //     username: {
  //       require: "Email không được để trống ",
  //       pattern: "Email không đúng định dạng",
  //     },
  //     password: {
  //       require: "Password không được để trống",
  //       pattern:
  //         "Password phải hơn 8 ký tự, ít nhất 1 số, ít nhất 1 ký tự đặc biệt",
  //     },
  //   },
  // }
  // );
  let { register, handleSubmit, error } = useForm(
    {
      username: "",
      password: "",
    },
    {
      rule: {
        username: {
          require: true,
          pattern: "email",
        },
        password: {
          require: true,
          min: 6,
          max: 32,
        },
      },
      message: {
        username: {
          require: "Email không được để trống ",
          pattern: "Email không đúng định dạng",
        },
        password: {
          require: "Password không được để trống",
          pattern:
            "Password phải hơn 8 ký tự, ít nhất 1 số, ít nhất 1 ký tự đặc biệt",
        },
      },
    }
  );

  // async function onSubmit(e) {
  //   // e.preventDefault();
  //   // let errObj = check();
  //   // if (Object.keys(errObj).length === 0) {
  //   //   dispatch(loginAction(form));
  //   //   // console.log(form);
  //   // }
  // }

  function formSubmit(form) {
    alert("thanh cong");
  }
  return (
    <div className="col-12 col-md-6">
      {/* Card */}
      <div className="card card-lg mb-10 mb-md-0">
        <div className="card-body">
          {/* Heading */}
          <h6 className="mb-7">{t(`Returning Customer`)}</h6>
          {/* Form */}
          <form onSubmit={handleSubmit(formSubmit)}>
            <div className="row">
              <div className="col-12">
                {/* Email */}
                <div className="form-group">
                  <label className="sr-only" htmlFor="loginEmail">
                    {t(`Email Address *`)}
                  </label>
                  <input
                    className="form-control form-control-sm"
                    id="loginEmail"
                    type="email"
                    placeholder="Email Address *"
                    required
                    // name="username"
                    // value={form.username}
                    // onChange={inputOnChange}
                    {...register("username")}
                  />
                  <ErrorMessage error={error.username} />
                  {/* {error.username && (
                    <p className="error-text-login">{error.username}</p>
                  )} */}
                </div>
              </div>
              <div className="col-12">
                {/* Password */}
                <div className="form-group">
                  <label className="sr-only" htmlFor="loginPassword">
                    {t(`Password *`)}
                  </label>
                  <input
                    className="form-control form-control-sm"
                    id="loginPassword"
                    type="password"
                    placeholder="Password *"
                    required
                    // name="password"
                    // value={form.password}
                    // onChange={inputOnChange}
                    {...register("password", {
                      required: true,
                      pattern: "email",
                    })}
                  />
                  <ErrorMessage error={error.password} />
                  {/* {error.password && (
                    <p className="error-text-login">{error.password}</p>
                  )} */}
                </div>
              </div>
              <div className="col-12 col-md">
                {/* Remember */}
                <div className="form-group">
                  <div className="custom-control custom-checkbox">
                    <input
                      className="custom-control-input"
                      id="loginRemember"
                      type="checkbox"
                    />
                    <label
                      className="custom-control-label"
                      htmlFor="loginRemember"
                    >
                      {t(`Remember me`)}
                    </label>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-auto">
                {/* Link */}
                <div className="form-group">
                  <a
                    className="font-size-sm text-reset"
                    data-toggle="modal"
                    href="#modalPasswordReset"
                  >
                    {t(`Forgot Password?`)}
                  </a>
                </div>
              </div>
              <div className="col-12">
                {/* Button */}
                <button
                  className="btn btn-sm btn-dark"
                  type="submit"
                  // onClick={onSubmit}
                >
                  {t(`Sign In`)}
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default LogIn;
