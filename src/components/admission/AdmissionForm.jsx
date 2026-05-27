// AdmissionForm.jsx

import { useState } from "react";

import { motion } from "framer-motion";

import axios from "axios";

import {
  User,
  Phone,
  Mail,
  School,
  MapPin,
} from "lucide-react";

const initialForm = {
  childName: "",
  age: "",
  gender: "",
  religion: "",
  standard: "",
  fatherName: "",
  motherName: "",
  phoneNumber: "",
  email: "",
  address: "",
};

export default function AdmissionForm() {
  const [formData, setFormData] =
    useState(initialForm);

  const [loading, setLoading] =
    useState(false);

  const [message, setMessage] =
    useState("");

  const [error, setError] =
    useState("");

  const handleChange = (e) => {
    const { name, value } =
      e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (
    e
  ) => {
    e.preventDefault();

    setLoading(true);

    setError("");

    setMessage("");

    try {
      const response =
        await axios.post(
          "http://localhost:5000/api/admissions",
          formData
        );

      setMessage(
        response.data.message
      );

      setFormData(initialForm);
    } catch (err) {
      setError(
        err.response?.data
          ?.message ||
          "Something went wrong"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="relative overflow-hidden bg-[#1D283A] py-20 text-white md:py-28">
      {/* BACKGROUND */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-[-120px] left-[-100px] h-[320px] w-[320px] rounded-full bg-[#D8C29D]/10 blur-[110px]" />

        <div className="absolute bottom-[-140px] right-[-120px] h-[360px] w-[360px] rounded-full bg-white/[0.04] blur-[130px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl px-6 md:px-10 lg:px-16">
        {/* HEADER */}
        <div className="max-w-3xl">
          <motion.div
            initial={{
              opacity: 0,
              y: 20,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.6,
            }}
            viewport={{
              once: true,
            }}
            className="mb-5 inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.04] px-5 py-2"
          >
            <div className="h-2 w-2 rounded-full bg-[#E8D4AE]" />

            <span className="text-xs uppercase tracking-[0.24em] text-[#E8D4AE]">
              Admissions Open
            </span>
          </motion.div>

          <motion.h2
            initial={{
              opacity: 0,
              y: 40,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.9,
            }}
            viewport={{
              once: true,
            }}
            className="text-4xl font-semibold leading-[1.05] tracking-[-0.04em] md:text-6xl"
          >
            Begin Your Child’s Learning Journey
          </motion.h2>

          <motion.p
            initial={{
              opacity: 0,
              y: 20,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: 0.15,
              duration: 0.7,
            }}
            viewport={{
              once: true,
            }}
            className="mt-6 max-w-2xl text-base leading-8 text-white/65 md:text-lg"
          >
            Fill out the admission
            form below to begin the
            enrollment process for
            your child at Shree
            Vimal Vidya Mandir.
          </motion.p>
        </div>

        {/* FORM */}
        <motion.form
          initial={{
            opacity: 0,
            y: 40,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.8,
          }}
          viewport={{
            once: true,
          }}
          onSubmit={handleSubmit}
          className="mt-14 rounded-[32px] border border-white/10 bg-white/[0.04] p-6 shadow-[0_25px_80px_rgba(0,0,0,0.28)] backdrop-blur-xl md:p-10"
        >
          {/* GRID */}
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {/* CHILD NAME */}
            <InputField
              icon={User}
              label="Child Name"
              name="childName"
              value={
                formData.childName
              }
              onChange={
                handleChange
              }
            />

            {/* AGE */}
            <InputField
              label="Age"
              type="number"
              name="age"
              value={formData.age}
              onChange={
                handleChange
              }
            />

            {/* GENDER */}
            <SelectField
              label="Gender"
              name="gender"
              value={
                formData.gender
              }
              onChange={
                handleChange
              }
              options={[
                "Male",
                "Female",
                "Other",
              ]}
            />

            {/* RELIGION */}
            <InputField
              label="Religion"
              name="religion"
              value={
                formData.religion
              }
              onChange={
                handleChange
              }
            />

            {/* STANDARD */}
            <SelectField
              icon={School}
              label="Standard"
              name="standard"
              value={
                formData.standard
              }
              onChange={
                handleChange
              }
              options={[
                "KG",
                "1st",
                "2nd",
                "3rd",
                "4th",
                "5th",
              ]}
            />

            {/* PHONE */}
            <InputField
              icon={Phone}
              label="Phone Number"
              name="phoneNumber"
              value={
                formData.phoneNumber
              }
              onChange={
                handleChange
              }
            />

            {/* FATHER */}
            <InputField
              label="Father Name"
              name="fatherName"
              value={
                formData.fatherName
              }
              onChange={
                handleChange
              }
            />

            {/* MOTHER */}
            <InputField
              label="Mother Name"
              name="motherName"
              value={
                formData.motherName
              }
              onChange={
                handleChange
              }
            />

            {/* EMAIL */}
            <div className="md:col-span-2">
              <InputField
                icon={Mail}
                label="Email Address"
                type="email"
                name="email"
                value={
                  formData.email
                }
                onChange={
                  handleChange
                }
              />
            </div>

            {/* ADDRESS */}
            <div className="md:col-span-2">
              <div>
                <label className="mb-3 block text-sm text-white/70">
                  Address
                </label>

                <div className="flex items-start gap-4 rounded-2xl border border-white/10 bg-white/[0.03] px-5 py-4 transition-all duration-300 focus-within:border-[#E8D4AE]/40">
                  <MapPin
                    size={18}
                    className="mt-1 text-[#E8D4AE]"
                  />

                  <textarea
                    name="address"
                    value={
                      formData.address
                    }
                    onChange={
                      handleChange
                    }
                    required
                    rows="4"
                    placeholder="Enter your address"
                    className="w-full resize-none bg-transparent text-white outline-none placeholder:text-white/30"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* MESSAGE */}
          {message && (
            <div className="mt-6 rounded-2xl border border-green-400/20 bg-green-400/10 px-5 py-4 text-sm text-green-300">
              {message}
            </div>
          )}

          {error && (
            <div className="mt-6 rounded-2xl border border-red-400/20 bg-red-400/10 px-5 py-4 text-sm text-red-300">
              {error}
            </div>
          )}

          {/* BUTTON */}
          <motion.button
            whileHover={{
              y: -2,
            }}
            whileTap={{
              scale: 0.98,
            }}
            type="submit"
            disabled={loading}
            className="mt-8 inline-flex items-center justify-center rounded-2xl bg-[#E8D4AE] px-8 py-4 text-sm font-semibold text-[#1D283A] transition-all duration-300 hover:bg-[#f0dfbf]"
          >
            {loading
              ? "Submitting..."
              : "Submit Admission"}
          </motion.button>
        </motion.form>
      </div>
    </section>
  );
}

/* INPUT FIELD */

function InputField({
  icon: Icon,
  label,
  name,
  value,
  onChange,
  type = "text",
}) {
  return (
    <div>
      <label className="mb-3 block text-sm text-white/70">
        {label}
      </label>

      <div className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.03] px-5 py-4 transition-all duration-300 focus-within:border-[#E8D4AE]/40">
        {Icon && (
          <Icon
            size={18}
            className="text-[#E8D4AE]"
          />
        )}

        <input
          type={type}
          name={name}
          value={value}
          onChange={onChange}
          required
          className="w-full bg-transparent text-white outline-none placeholder:text-white/30"
        />
      </div>
    </div>
  );
}

/* SELECT FIELD */

function SelectField({
  icon: Icon,
  label,
  name,
  value,
  onChange,
  options,
}) {
  return (
    <div>
      <label className="mb-3 block text-sm text-white/70">
        {label}
      </label>

      <div className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.03] px-5 py-4 transition-all duration-300 focus-within:border-[#E8D4AE]/40">
        {Icon && (
          <Icon
            size={18}
            className="text-[#E8D4AE]"
          />
        )}

        <select
          name={name}
          value={value}
          onChange={onChange}
          required
          className="w-full bg-[#1D283A] text-white outline-none"
        >
          <option value="">
            Select
          </option>

          {options.map(
            (option, index) => (
              <option
                key={index}
                value={option}
              >
                {option}
              </option>
            )
          )}
        </select>
      </div>
    </div>
  );
}