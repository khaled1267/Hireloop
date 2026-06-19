"use client";

import React from "react";
import { Table, Button } from "@heroui/react";
import { updateCompany } from "@/lib/action/company";
import { CheckCircle2, XCircle, AlertCircle } from "lucide-react";

const CompanyTable = ({ companies }) => {
  const handleApprove = async (id) => {
    const result = await updateCompany(id, { status: "Approved" });
    if (result.modifiedCount) {
      console.log(`Approved company with ID: ${id}`, result);
    }
  };

  const handleReject = async (id) => {
    const result = await updateCompany(id, { status: "Rejected" });
  };

  const formatDate = (dateString) => {
    if (!dateString) return "";
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      month: "short",
      day: "2-digit",
      year: "numeric",
    });
  };

  // Modern Styled Status Configuration
  const getStatusDetails = (status) => {
    switch (status?.toLowerCase()) {
      case "approved":
        return { 
          bg: "bg-emerald-500/10 border-emerald-500/30", 
          text: "text-emerald-400", 
          label: "Approved",
          icon: <CheckCircle2 className="w-4 h-4 text-emerald-400" />
        };
      case "rejected":
        return { 
          bg: "bg-rose-500/10 border-rose-500/30", 
          text: "text-rose-400", 
          label: "Rejected",
          icon: <XCircle className="w-4 h-4 text-rose-400" />
        };
      case "pending":
      default:
        return { 
          bg: "bg-amber-500/10 border-amber-500/30", 
          text: "text-amber-400", 
          label: "Pending",
          icon: <AlertCircle className="w-4 h-4 text-amber-400" />
        };
    }
  };

  const getInitials = (name) => {
    return name
      ? name
          .split(" ")
          .map((n) => n[0])
          .join("")
          .substring(0, 2)
          .toUpperCase()
      : "CO";
  };

  return (
    <div className="w-full bg-gradient-to-b from-[#16161a] to-[#0e0e11] text-neutral-200 p-6 rounded-xl border border-neutral-800/60 shadow-2xl shadow-black/40">
      <Table className="bg-transparent border-none">
        <Table.ScrollContainer>
          <Table.Content aria-label="Company approval management table">
            <Table.Header>
              <Table.Column
                isRowHeader
                className="text-neutral-400 font-semibold tracking-wider text-xs uppercase pb-4 border-b border-neutral-800/80"
              >
                Company Name
              </Table.Column>

              <Table.Column className="text-neutral-400 font-semibold tracking-wider text-xs uppercase pb-4 border-b border-neutral-800/80">
                Recruiter Email
              </Table.Column>

              <Table.Column className="text-neutral-400 font-semibold tracking-wider text-xs uppercase pb-4 border-b border-neutral-800/80">
                Industry
              </Table.Column>
              
              <Table.Column className="text-neutral-400 font-semibold tracking-wider text-xs uppercase pb-4 border-b border-neutral-800/80">
                Jobs Count
              </Table.Column>

              <Table.Column className="text-neutral-400 font-semibold tracking-wider text-xs uppercase pb-4 border-b border-neutral-800/80">
                Status
              </Table.Column>

              <Table.Column className="text-neutral-400 font-semibold tracking-wider text-xs uppercase pb-4 border-b border-neutral-800/80">
                Date Submitted
              </Table.Column>

              <Table.Column className="text-neutral-400 font-semibold tracking-wider text-xs uppercase pb-4 border-b border-neutral-800/80 text-right">
                Actions
              </Table.Column>
            </Table.Header>
            <Table.Body>
              {companies.map((company, index) => {
                const companyId = company._id?.$oid || company._id;
                const statusInfo = getStatusDetails(company.status);

                return (
                  <Table.Row
                    key={index}
                    className="border-b border-neutral-900/60 hover:bg-neutral-800/30 transition-all duration-200"
                  >
                    {/* Company Avatar & Name */}
                    <Table.Cell className="py-4 align-middle">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 flex items-center justify-center bg-gradient-to-br from-violet-600 to-indigo-700 text-white rounded-lg font-bold text-sm tracking-wider shadow-md shadow-indigo-900/20">
                          {getInitials(company.name)}
                        </div>
                        <span className="font-semibold text-neutral-100 hover:text-white transition-colors">
                          {company.name}
                        </span>
                      </div>
                    </Table.Cell>

                    {/* Recruiter Email */}
                    <Table.Cell className="py-4 align-middle text-neutral-400 font-medium">
                      {company.recruiterEmail ||
                        `recruiter@${company.name.toLowerCase().replace(/\s+/g, "")}.com`}
                    </Table.Cell>

                    {/* Industry Pill */}
                    <Table.Cell className="py-4 align-middle">
                      <span className="px-3 py-1 bg-neutral-800/80 text-cyan-400 border border-cyan-500/20 rounded-md text-xs font-medium uppercase tracking-wider">
                        {company.industry}
                      </span>
                    </Table.Cell>

                    {/* Jobs Count Pill */}
                    <Table.Cell className="py-4 align-middle">
                      <span className="px-3 py-1 bg-neutral-800/80 text-indigo-400 border border-indigo-500/20 rounded-md text-xs font-semibold">
                        {company.jobCount || 0} Jobs
                      </span>
                    </Table.Cell>

                    {/* Status Styled Badge */}
                    <Table.Cell className="py-4 align-middle">
                      <div className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full border ${statusInfo.bg}`}>
                        {statusInfo.icon}
                        <span className={`text-xs font-semibold tracking-wide ${statusInfo.text}`}>
                          {statusInfo.label}
                        </span>
                      </div>
                    </Table.Cell>

                    {/* Date Submitted */}
                    <Table.Cell className="py-4 align-middle text-neutral-400 font-medium">
                      {formatDate(
                        company.createdAt?.$date || company.createdAt,
                      )}
                    </Table.Cell>

                    {/* Actions Panel */}
                    <Table.Cell className="py-4 align-middle text-right">
                      <div className="flex justify-end gap-2.5">
                        {company.status?.toLowerCase() !== "approved" && (
                          <Button
                            size="sm"
                            variant="flat"
                            onClick={() => handleApprove(companyId)}
                            className="bg-emerald-500/10 hover:bg-emerald-500 text-emerald-400 hover:text-neutral-950 font-semibold rounded-lg px-3 py-1 text-xs transition-all duration-200"
                          >
                            Approve
                          </Button>
                        )}
                        {company.status?.toLowerCase() !== "rejected" && (
                          <Button
                            size="sm"
                            variant="flat"
                            onClick={() => handleReject(companyId)}
                            className="bg-rose-500/10 hover:bg-rose-500 text-rose-400 hover:text-neutral-950 font-semibold rounded-lg px-3 py-1 text-xs transition-all duration-200"
                          >
                            Reject
                          </Button>
                        )}
                      </div>
                    </Table.Cell>
                  </Table.Row>
                );
              })}
            </Table.Body>
          </Table.Content>
        </Table.ScrollContainer>
      </Table>
    </div>
  );
};

export default CompanyTable;