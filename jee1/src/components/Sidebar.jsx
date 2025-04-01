import React, { useState } from "react";
import { MdOutlineDashboard, MdOutlineEventNote, MdConnectedTv, MdPeopleOutline } from "react-icons/md";
import { TfiPencil } from "react-icons/tfi";
import { PiNotepad, PiBuildingOfficeLight, PiMathOperationsLight } from "react-icons/pi";
import { FiInbox } from "react-icons/fi";
import { BsBarChart } from "react-icons/bs";
import { AiOutlineProfile } from "react-icons/ai";
import { IoMdHelpCircleOutline } from "react-icons/io";
import { Offcanvas, Button } from "react-bootstrap";
import "../style/Sidebar.css";

const Sidebar = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      {/* Mobile Menu Button */}
      <Button variant="dark" onClick={handleShow} className="d-md-none m-3">
        ☰ Menu
      </Button>

      {/* Sidebar - Offcanvas for mobile */}
      <Offcanvas show={show} onHide={handleClose} responsive="md">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Menu</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <div className="d-flex flex-column bg-light sidebar">
            <button className="btn btn-api w-100">AI Coming Soon</button>

            <p className="sidebar-heading">BUSINESS</p>
            <ul className="nav nav-pills flex-column mb-3">
              <li className="nav-item">
                <a href="#" className="nav-link">
                  <MdOutlineDashboard className="me-2" /> Overview
                </a>
              </li>
              <li>
                <a href="#" className="nav-link">
                  <TfiPencil className="me-2" /> Order Management
                </a>
              </li>
              <li>
                <a href="#" className="nav-link">
                  <PiNotepad className="me-2" /> Distributor
                </a>
              </li>
              <li>
                <a href="#" className="nav-link">
                  <MdOutlineEventNote className="me-2" /> Expiry
                </a>
              </li>
            </ul>

            <p className="sidebar-heading">PRODUCTS</p>
            <ul className="nav nav-pills flex-column mb-2">
              <li className="nav-item">
                <a href="#" className="nav-link text-dark">
                  <FiInbox className="me-2" /> Product Management
                </a>
              </li>
              <li>
                <a href="#" className="nav-link text-dark">
                  <MdConnectedTv className="me-2" /> Stock Management
                </a>
              </li>
            </ul>

            <p className="sidebar-heading">ORGANIZATION MANAGEMENT</p>
            <ul className="nav nav-pills flex-column mb-2">
              <li className="nav-item">
                <a href="#" className="nav-link">
                  <MdPeopleOutline className="me-2" /> Employee Management
                </a>
              </li>
              <li>
                <a href="#" className="nav-link">
                  <PiBuildingOfficeLight className="me-2" /> Divisions Management
                </a>
              </li>
            </ul>

            <p className="sidebar-heading">FINANCE & REPORTING</p>
            <ul className="nav nav-pills flex-column mb-2">
              <li className="nav-item">
                <a href="#" className="nav-link">
                  <PiMathOperationsLight className="me-2" /> Accounting
                </a>
              </li>
              <li>
                <a href="#" className="nav-link">
                  <BsBarChart className="me-2" /> Analytics & Report
                </a>
              </li>
            </ul>

            <p className="sidebar-heading">Other</p>
            <ul className="nav nav-pills flex-column mb-2">
              <li className="nav-item">
                <a href="#" className="nav-link">
                  <AiOutlineProfile className="me-2" /> Profile Setting
                </a>
              </li>
              <li>
                <a href="#" className="nav-link">
                  <IoMdHelpCircleOutline className="me-2" /> Help
                </a>
              </li>
            </ul>
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default Sidebar;
