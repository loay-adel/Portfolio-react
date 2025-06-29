import {
  Button,
  Card,
  CardBody,
  CardFooter,
  Typography,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  Avatar,
  IconButton,
} from "@material-tailwind/react";

import { motion } from "framer-motion";
import {
  FaArrowDown,
  FaLinkedinIn,
  FaHtml5,
  FaCss3,
  FaJs,
  FaBootstrap,
  FaReact,
  FaGithub,
  FaNodeJs,
  FaDocker,
  FaLaptopCode,
  FaServer,
  FaGitAlt,
} from "react-icons/fa";
import {
  SiFreelancer,
  SiMysql,
  SiPostman,
  SiMongodb,
  SiTailwindcss,
  SiRedux,
  SiTypescript,
} from "react-icons/si";
import { PiMicrosoftOutlookLogoFill } from "react-icons/pi";
import { TbSend, TbApi, TbSeo, TbBrandNextjs } from "react-icons/tb";
import { MdDevices } from "react-icons/md";
import { useState } from "react";
import { Link } from "react-router-dom";
import { DialogWithImage } from "./Dialog";

const Home = () => {
  // Animation variants
  const listVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { x: -50, opacity: 0 },
    show: { x: 0, opacity: 1 },
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  // Portfolio data
  const portfolioItems = [
    {
      imageLink: "myfirst.png",
      title: "E-commerce Platform",
      description:
        "Full-featured online store with cart and payment integration",
      previewLink: "",
      Video: "",
      brief: "",
    },
    {
      imageLink: "sec.png",
      title: "Dashboard UI",
      description: "Analytics dashboard with interactive charts",
    },
    {
      imageLink: "thrid.png",
      title: "Mobile App Design",
      description: "Cross-platform mobile application",
    },
    {
      imageLink: "fourth.png",
      title: "Portfolio Website",
      description: "Custom portfolio showcasing creative work",
    },
  ];

  const testimonials = [
    {
      imageLink: "review1.png",
      title: "Restaurant Menu Order System",
      viewLink: "https://khamsat.com/user/loay_adel1/reviews/1058777",
      quote: " delivered exceptional work on our restaurant ordering system...",
    },
    {
      imageLink: "review2.png",
      title: "Sales Funnel Optimization",
      viewLink: "https://khamsat.com/user/loay_adel1/reviews/1050528",
      quote: "The funnel Loay built increased our conversion rate by 35%...",
    },
    {
      imageLink: "review3.png",
      title: "Civil Engineer portofolio",
      viewLink: "https://khamsat.com/user/loay_adel1/reviews/1069345",
      quote: "helped a Civil engineer to show his abillity on the network",
    },
  ];

  // Form state
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    timeline: "",
    service: "",
    details: "",
  });

  const services = [
    "Web Development",
    "UI/UX Design",
    "Mobile App Development",
    "Consultation",
    "Other",
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Thank you for your message! I will get back to you soon.");
    setFormData({
      name: "",
      email: "",
      phone: "",
      timeline: "",
      service: "",
      details: "",
    });
  };
  const [open, setOpen] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);

  const handleOpen = () => setOpen((cur) => !cur);
  const handleIsFavorite = () => setIsFavorite((cur) => !cur);

  return (
    <div className="dark:bg-gray-900 bg-gray-50 min-h-screen overflow-x-hidden px-4 sm:px-6">
      {/* Hero Section */}
      <section className="relative w-full  h-[calc(100vh-56px)] sm:h-[calc(100vh-72px)] flex items-center justify-center py-16">
        <div className="max-w-6xl mx-auto text-center px-4">
          <motion.h1
            variants={fadeInUp}
            initial="hidden"
            animate="show"
            className="text-4xl sm:text-5xl md:text-7xl font-bold dark:text-white text-gray-900 mb-4 sm:mb-6"
          >
            Hi, I'm{" "}
            <span className="text-primaryCyan-500 dark:text-primaryCyan-400">
              Loay Adel
            </span>
          </motion.h1>

          <motion.p
            variants={fadeInUp}
            initial="hidden"
            animate="show"
            transition={{ delay: 0.2 }}
            className="text-lg sm:text-xl md:text-2xl dark:text-primaryCyan-300 text-primaryCyan-500 mb-8 sm:mb-10 max-w-2xl mx-auto"
          >
            React Frontend Developer | MERN Stack Specialist
          </motion.p>

          <motion.div
            variants={fadeInUp}
            initial="hidden"
            animate="show"
            transition={{ delay: 0.4 }}
            className="flex flex-wrap justify-center gap-4 sm:gap-6 mb-12 sm:mb-16"
          >
            <Button className="px-6 py-3 sm:px-8 sm:py-4 text-base sm:text-lg bg-primaryCyan-500 hover:bg-primaryCyan-600 dark:bg-primaryCyan-600 dark:hover:bg-primaryCyan-700 text-white rounded-lg shadow-lg transition-all hover:shadow-xl">
              Collaborate With Me
            </Button>
            <a
              href="https://drive.google.com/uc?export=download&id=1JagdEKlFAEwmyL1Zn67dGVUaeNx_2zOY"
              download="Loay_Adel_CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                variant="outlined"
                className="px-6 py-3 sm:px-8 sm:py-4 text-base sm:text-lg border-2 dark:border-gray-600 border-gray-300 dark:text-white text-gray-800 hover:bg-gray-200/50 dark:hover:bg-gray-800/50 rounded-lg flex items-center gap-2 transition-all"
              >
                Download CV
                <FaArrowDown className="text-lg" />
              </Button>
            </a>
          </motion.div>

          <motion.div
            variants={fadeInUp}
            initial="hidden"
            animate="show"
            transition={{ delay: 0.6 }}
            className="flex flex-wrap justify-center gap-4 sm:gap-8"
          >
            {[
              { value: "5+", label: "Years Experience" },
              { value: "20+", label: "Projects Completed" },
              { value: "100%", label: "Client Satisfaction" },
            ].map((item, index) => (
              <div key={index} className="flex flex-col items-center px-4 py-2">
                <p className="text-2xl sm:text-3xl font-bold dark:text-primaryCyan-400 text-primaryCyan-500">
                  {item.value}
                </p>
                <p className="text-sm sm:text-base dark:text-gray-400 text-gray-600">
                  {item.label}
                </p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 dark:bg-gray-800 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12 sm:mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold dark:text-white text-gray-900 mb-3 sm:mb-4">
              My Services
            </h2>
            <p className="text-base sm:text-lg dark:text-gray-300 text-gray-600 max-w-2xl mx-auto">
              Specialized services tailored to your business needs
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {[
              {
                icon: (
                  <FaLaptopCode className="text-3xl sm:text-4xl text-primaryCyan-500 dark:text-primaryCyan-400" />
                ),
                title: "Frontend Development",
                description:
                  "Building responsive and modern UIs using React, Tailwind, and modern frontend tools.",
              },
              {
                icon: (
                  <FaServer className="text-3xl sm:text-4xl text-primaryCyan-500 dark:text-primaryCyan-400" />
                ),
                title: "Backend Development",
                description:
                  "RESTful APIs with Node.js and Express, ensuring secure and efficient server-side logic.",
              },
              {
                icon: (
                  <SiMongodb className="text-3xl sm:text-4xl text-primaryCyan-500 dark:text-primaryCyan-400" />
                ),
                title: "Database Solutions",
                description:
                  "Schema design and data handling using MongoDB and efficient query structures.",
              },
              {
                icon: (
                  <TbApi className="text-3xl sm:text-4xl text-primaryCyan-500 dark:text-primaryCyan-400" />
                ),
                title: "API Integration",
                description:
                  "Seamless integration of third-party APIs for payments, authentication, and more.",
              },
              {
                icon: (
                  <MdDevices className="text-3xl sm:text-4xl text-primaryCyan-500 dark:text-primaryCyan-400" />
                ),
                title: "Responsive Design",
                description:
                  "Mobile-first responsive designs that work perfectly across all devices.",
              },
              {
                icon: (
                  <FaGitAlt className="text-3xl sm:text-4xl text-primaryCyan-500 dark:text-primaryCyan-400" />
                ),
                title: "Version Control",
                description:
                  "Professional Git workflow implementation for efficient team collaboration.",
              },
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full dark:bg-gray-700/50 bg-white group hover:shadow-lg transition-shadow">
                  <CardBody className="p-6 sm:p-8">
                    <div className="mb-4 sm:mb-6">{service.icon}</div>
                    <Typography
                      variant="h5"
                      className="mb-3 sm:mb-4 dark:text-white text-gray-900"
                    >
                      {service.title}
                    </Typography>
                    <Typography className="dark:text-gray-300 text-gray-600 text-sm sm:text-base">
                      {service.description}
                    </Typography>
                  </CardBody>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 dark:bg-gray-900 bg-gray-100">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12 sm:mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold dark:text-white text-gray-900 mb-3 sm:mb-4">
              Technical Skills
            </h2>
            <p className="text-base sm:text-lg dark:text-gray-300 text-gray-600 max-w-2xl mx-auto">
              Technologies I work with daily
            </p>
          </motion.div>

          <motion.div
            variants={listVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 sm:gap-6"
          >
            {[
              { icon: <FaHtml5 />, name: "HTML5", color: "text-orange-500" },
              { icon: <FaCss3 />, name: "CSS3", color: "text-blue-500" },
              { icon: <FaJs />, name: "JavaScript", color: "text-yellow-400" },
              {
                icon: <SiTypescript />,
                name: "TypeScript",
                color: "text-blue-600",
              },
              { icon: <FaReact />, name: "React", color: "text-cyan-500" },
              {
                icon: <TbBrandNextjs />,
                name: "Next.js",
                color: "text-black dark:text-white",
              },
              { icon: <SiRedux />, name: "Redux", color: "text-purple-500" },
              {
                icon: <SiTailwindcss />,
                name: "Tailwind",
                color: "text-sky-400",
              },
              {
                icon: <FaBootstrap />,
                name: "Bootstrap",
                color: "text-purple-600",
              },
              { icon: <FaNodeJs />, name: "Node.js", color: "text-green-600" },
              { icon: <SiMongodb />, name: "MongoDB", color: "text-green-500" },
              { icon: <SiMysql />, name: "MySQL", color: "text-blue-400" },
              { icon: <FaGitAlt />, name: "Git", color: "text-orange-600" },
              {
                icon: <FaGithub />,
                name: "GitHub",
                color: "text-gray-800 dark:text-white",
              },
              { icon: <FaDocker />, name: "Docker", color: "text-blue-700" },
              {
                icon: <SiPostman />,
                name: "Postman",
                color: "text-orange-500",
              },
              { icon: <TbSeo />, name: "SEO", color: "text-pink-500" },
              { icon: <TbApi />, name: "REST API", color: "text-indigo-500" },
            ].map((skill, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="flex flex-col items-center p-4 sm:p-6 dark:bg-gray-800/50 bg-white rounded-lg sm:rounded-xl shadow-sm hover:shadow-md transition-all duration-300 group"
                whileHover={{ y: -8 }}
              >
                <div
                  className={`text-4xl sm:text-5xl mb-3 sm:mb-4 ${skill.color}`}
                >
                  {skill.icon}
                </div>
                <span className="text-xs sm:text-sm font-medium dark:text-gray-300 text-gray-700">
                  {skill.name}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 dark:bg-gray-800 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12 sm:mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold dark:text-white text-gray-900 mb-3 sm:mb-4">
              About Me
            </h2>
            <p className="text-base sm:text-lg dark:text-gray-300 text-gray-600 max-w-2xl mx-auto">
              Frontend Developer & MERN Stack Specialist
            </p>
          </motion.div>

          <div className="flex flex-col md:flex-row gap-8 sm:gap-12 items-center">
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="flex justify-center w-full md:w-auto"
            >
              <div className="w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 rounded-full bg-primaryCyan-500/20 dark:bg-primaryCyan-400/20 flex items-center justify-center">
                <div className="w-40 h-40 sm:w-56 sm:h-56 md:w-72 md:h-72 rounded-full bg-primaryCyan-500/30 dark:bg-primaryCyan-400/30 flex items-center justify-center">
                  <div className="w-32 h-32 sm:w-48 sm:h-48 md:w-64 md:h-64 rounded-full bg-primaryCyan-500/40 dark:bg-primaryCyan-400/40 flex items-center justify-center">
                    <div className="w-24 h-24 sm:w-40 sm:h-40 md:w-56 md:h-56 rounded-full bg-primaryCyan-500 dark:bg-primaryCyan-400 flex items-center justify-center text-white text-xl sm:text-2xl font-bold">
                      LA
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="w-full"
            >
              <Typography className="text-base sm:text-lg dark:text-gray-300 text-gray-700 mb-4 sm:mb-6 leading-relaxed">
                I'm a passionate web developer with a strong foundation in
                front-end and back-end technologies. I specialize in creating
                responsive, user-friendly web applications using modern tools
                and frameworks like React, Tailwind CSS, Node.js, and MongoDB.
              </Typography>
              <Typography className="text-base sm:text-lg dark:text-gray-300 text-gray-700 mb-4 sm:mb-6 leading-relaxed">
                With a solid background in CSS essentials, UX/UI principles, and
                TypeScript, I pay close attention to code quality, best
                practices, and functional documentation to build maintainable
                and scalable projects.
              </Typography>
              <Typography className="text-base sm:text-lg dark:text-gray-300 text-gray-700 mb-6 sm:mb-8 leading-relaxed">
                My goal is to deliver high-quality digital experiences that meet
                client needs and provide seamless user interactions. When I'm
                not coding, I'm exploring ways AI can enhance development
                workflows.
              </Typography>
              <Button className="bg-primaryCyan-500 hover:bg-primaryCyan-600 dark:bg-primaryCyan-600 dark:hover:bg-primaryCyan-700 text-white px-6 sm:px-8 py-2 sm:py-3 rounded-lg transition-all">
                Contact Me
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 dark:bg-gray-900 bg-gray-100">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12 sm:mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold dark:text-white text-gray-900 mb-3 sm:mb-4">
              My Portfolio
            </h2>
            <p className="text-base sm:text-lg dark:text-gray-300 text-gray-600 max-w-2xl mx-auto">
              Selected projects I've worked on
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
            {portfolioItems.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group relative overflow-hidden rounded-lg sm:rounded-xl shadow-lg"
              >
                <img
                  className="w-full h-60 sm:h-80 object-cover transition-transform duration-500 group-hover:scale-110"
                  src={item.imageLink}
                  alt={item.title}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6">
                  <h3 className="text-white text-xl sm:text-2xl font-bold mb-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    {item.title}
                  </h3>
                  <p className="text-gray-300 text-sm sm:text-base mb-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-100">
                    {item.description}
                  </p>
                  <DialogWithImage />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 dark:bg-gray-800 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12 sm:mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold dark:text-white text-gray-900 mb-3 sm:mb-4">
              Client Testimonials
            </h2>
            <p className="text-base sm:text-lg dark:text-gray-300 text-gray-600 max-w-2xl mx-auto">
              What clients say about working with me
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="group"
              >
                <Link to={testimonial.viewLink} target="_blank">
                  <Card className="h-full dark:bg-gray-700/50 bg-white overflow-hidden hover:shadow-lg transition-shadow">
                    <div className="relative h-40 sm:h-48 overflow-hidden">
                      <img
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        src={testimonial.imageLink}
                        alt={testimonial.title}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-4 sm:p-6">
                        <h3 className="text-white text-lg sm:text-xl font-bold">
                          {testimonial.title}
                        </h3>
                      </div>
                    </div>
                    <CardBody className="p-4 sm:p-6">
                      <p className="dark:text-gray-300 text-gray-600 text-sm sm:text-base mb-3 sm:mb-4 italic">
                        "{testimonial.quote}"
                      </p>
                      <Button
                        variant="text"
                        className="flex items-center gap-2 dark:text-primaryCyan-400 text-primaryCyan-500 p-0 hover:bg-transparent text-sm sm:text-base"
                      >
                        View full review
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={2}
                          stroke="currentColor"
                          className="h-4 w-4"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                          />
                        </svg>
                      </Button>
                    </CardBody>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 dark:bg-gray-900 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12 sm:mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold dark:text-white text-gray-900 mb-3 sm:mb-4">
              Let's Work Together
            </h2>
            <p className="text-base sm:text-lg dark:text-gray-300 text-gray-600 max-w-2xl mx-auto">
              Have a project in mind? Get in touch and let's discuss how I can
              help.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Card className="dark:bg-gray-800/50 bg-white/50 backdrop-blur-sm border border-gray-200 dark:border-gray-700">
              <CardBody className="p-6 sm:p-8 md:p-12">
                <form
                  onSubmit={handleSubmit}
                  className="space-y-4 sm:space-y-6"
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm sm:text-base font-medium dark:text-gray-300 text-gray-700 mb-1 sm:mb-2"
                      >
                        Your Name*
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-3 py-2 sm:px-4 sm:py-3 rounded-lg border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-primaryCyan-500 focus:border-transparent dark:bg-gray-700 dark:text-white transition-all text-sm sm:text-base"
                        placeholder="John Doe"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm sm:text-base font-medium dark:text-gray-300 text-gray-700 mb-1 sm:mb-2"
                      >
                        Email Address*
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-3 py-2 sm:px-4 sm:py-3 rounded-lg border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-primaryCyan-500 focus:border-transparent dark:bg-gray-700 dark:text-white transition-all text-sm sm:text-base"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-sm sm:text-base font-medium dark:text-gray-300 text-gray-700 mb-1 sm:mb-2"
                    >
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-3 py-2 sm:px-4 sm:py-3 rounded-lg border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-primaryCyan-500 focus:border-transparent dark:bg-gray-700 dark:text-white transition-all text-sm sm:text-base"
                      placeholder="+1 (555) 123-4567"
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                    <div>
                      <label
                        htmlFor="timeline"
                        className="block text-sm sm:text-base font-medium dark:text-gray-300 text-gray-700 mb-1 sm:mb-2"
                      >
                        Project Timeline
                      </label>
                      <select
                        id="timeline"
                        name="timeline"
                        value={formData.timeline}
                        onChange={handleChange}
                        className="w-full px-3 py-2 sm:px-4 sm:py-3 rounded-lg border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-primaryCyan-500 focus:border-transparent dark:bg-gray-700 dark:text-white transition-all text-sm sm:text-base"
                      >
                        <option value="">
                          When do you need this completed?
                        </option>
                        <option value="ASAP">ASAP (Within 2 weeks)</option>
                        <option value="1-2 weeks">1-2 months</option>
                        <option value="1 month">3-6 months</option>
                        <option value="Flexible">Flexible timeline</option>
                      </select>
                    </div>

                    <div>
                      <label
                        htmlFor="service"
                        className="block text-sm sm:text-base font-medium dark:text-gray-300 text-gray-700 mb-1 sm:mb-2"
                      >
                        Service Needed*
                      </label>
                      <select
                        id="service"
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        required
                        className="w-full px-3 py-2 sm:px-4 sm:py-3 rounded-lg border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-primaryCyan-500 focus:border-transparent dark:bg-gray-700 dark:text-white transition-all text-sm sm:text-base"
                      >
                        <option value="">
                          What service are you interested in?
                        </option>
                        {services.map((service, index) => (
                          <option key={index} value={service}>
                            {service}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="details"
                      className="block text-sm sm:text-base font-medium dark:text-gray-300 text-gray-700 mb-1 sm:mb-2"
                    >
                      Project Details*
                    </label>
                    <textarea
                      id="details"
                      name="details"
                      rows={4}
                      value={formData.details}
                      onChange={handleChange}
                      required
                      className="w-full px-3 py-2 sm:px-4 sm:py-3 rounded-lg border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-primaryCyan-500 focus:border-transparent dark:bg-gray-700 dark:text-white transition-all text-sm sm:text-base"
                      placeholder="Tell me about your project goals, requirements, and any specific needs you have..."
                    />
                  </div>

                  <div className="pt-2 sm:pt-4 flex justify-center">
                    <Button
                      type="submit"
                      className="w-full md:w-auto px-6 sm:px-8 py-2 sm:py-3 justify-center bg-primaryCyan-500 hover:bg-primaryCyan-600 dark:bg-primaryCyan-600 dark:hover:bg-primaryCyan-700 text-white font-medium rounded-lg shadow-lg transition-all transform hover:scale-105 flex items-center gap-2 text-sm sm:text-base"
                    >
                      Send Message
                      <TbSend className="text-lg sm:text-xl" />
                    </Button>
                  </div>
                </form>
              </CardBody>
            </Card>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;
