<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit;
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['error' => 'Method not allowed']);
    exit;
}

$input = json_decode(file_get_contents('php://input'), true);

if (!$input) {
    http_response_code(400);
    echo json_encode(['error' => 'Invalid request body']);
    exit;
}

$name = trim($input['name'] ?? '');
$mobile = trim($input['mobile'] ?? '');
$loanType = trim($input['loanType'] ?? '');
$loanAmount = trim($input['loanAmount'] ?? '');
$message = trim($input['message'] ?? '');

if (strlen($name) < 2) {
    http_response_code(400);
    echo json_encode(['error' => 'Please enter your full name.']);
    exit;
}

$cleanMobile = preg_replace('/[\s\-+]/', '', $mobile);
if (!preg_match('/^(91)?[6-9]\d{9}$/', $cleanMobile)) {
    http_response_code(400);
    echo json_encode(['error' => 'Please enter a valid Indian mobile number.']);
    exit;
}

if (empty($loanType)) {
    http_response_code(400);
    echo json_encode(['error' => 'Please select a loan type.']);
    exit;
}

$timestamp = date('d-M-Y h:i:s A');
$ip = $_SERVER['REMOTE_ADDR'] ?? 'unknown';

$enquiry = [
    'timestamp' => $timestamp,
    'name' => $name,
    'mobile' => $mobile,
    'loanType' => $loanType,
    'loanAmount' => $loanAmount ?: 'Not specified',
    'message' => $message ?: '',
    'ip' => $ip,
];

$csvLine = '"' . implode('","', array_values($enquiry)) . "\"\n";

$csvFile = __DIR__ . '/enquiries.csv';
if (!file_exists($csvFile)) {
    $header = '"Timestamp","Name","Mobile","Loan Type","Loan Amount","Message","IP"' . "\n";
    file_put_contents($csvFile, $header);
}
file_put_contents($csvFile, $csvLine, FILE_APPEND | LOCK_EX);

$to = 'info@universesloans.com';
$subject = "New Enquiry: {$loanType} - {$name}";
$body = "New Loan Enquiry\n\n";
$body .= "Name: {$name}\n";
$body .= "Mobile: {$mobile}\n";
$body .= "Loan Type: {$loanType}\n";
$body .= "Amount: " . ($loanAmount ?: 'Not specified') . "\n";
$body .= "Message: " . ($message ?: 'N/A') . "\n";
$body .= "Time: {$timestamp}\n";
$body .= "IP: {$ip}\n";

$headers = "From: noreply@universesloans.com\r\n";
$headers .= "X-Mailer: PHP/" . phpversion();

@mail($to, $subject, $body, $headers);

echo json_encode(['success' => true, 'message' => 'Enquiry submitted successfully.']);
?>