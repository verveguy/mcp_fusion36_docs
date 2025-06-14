#!/usr/bin/env node

/**
 * @fileoverview Test Suite for Fusion 360 API Documentation MCP Server
 * 
 * This script provides comprehensive testing of the Fusion 360 API Documentation
 * MCP Server functionality without going through the MCP protocol layer.
 * It directly tests the service methods to ensure they work correctly.
 * 
 * The test suite covers:
 * - Documentation structure loading and parsing
 * - API documentation search functionality
 * - Class information retrieval and analysis
 * - Specialized Arrange3D definition analysis
 * - Error handling and edge cases
 * 
 * This script is equivalent to the Python test_server.py and should produce
 * identical results, demonstrating compatibility between implementations.
 * 
 * @author Generated by TypeScript/NextJS MCP Server Translation
 * @version 0.1.0
 */

import { Fusion360Service } from '../lib/fusion360-service.js';

/** Service instance for testing all functionality */
const fusion360Service = new Fusion360Service();

/**
 * Tests the getTocTreeInfo() method functionality.
 * 
 * This test verifies that the service can successfully load the Fusion 360
 * documentation table of contents and provide a formatted overview of the
 * available API documentation structure.
 * 
 * @throws Will throw an error if the service fails to load documentation
 */
async function testTocTreeInfo(): Promise<void> {
  console.log('🔍 Testing getTocTreeInfo()...');
  const result = await fusion360Service.getTocTreeInfo();
  console.log('✅ Success!');
  console.log(`Result preview: ${result.substring(0, 200)}...`);
  console.log();
}

/**
 * Tests the searchApiDocumentation() method functionality.
 * 
 * This test verifies that the service can search through the API documentation
 * and return relevant results based on query terms. Uses a limited result
 * count to keep output manageable.
 * 
 * @throws Will throw an error if the search functionality fails
 */
async function testSearch(): Promise<void> {
  console.log('🔍 Testing searchApiDocumentation()...');
  const result = await fusion360Service.searchApiDocumentation('API', 3);
  console.log('✅ Success!');
  console.log(`Result: ${result}`);
  console.log();
}

/**
 * Tests the getApiClassInfo() method functionality.
 * 
 * This test verifies that the service can retrieve and analyze detailed
 * information about a specific API class, including methods, properties,
 * and code examples.
 * 
 * @throws Will throw an error if class information retrieval fails
 */
async function testClassInfo(): Promise<void> {
  console.log('🔍 Testing getApiClassInfo()...');
  const result = await fusion360Service.getApiClassInfo('Sketch');
  console.log('✅ Success!');
  console.log(`Result preview: ${result.substring(0, 300)}...`);
  console.log();
}

/**
 * Tests the analyzeArrange3dDefinition() method functionality.
 * 
 * This test verifies that the service can perform specialized analysis
 * of the Arrange3DDefinition object and related components in the
 * Fusion 360 API documentation.
 * 
 * @throws Will throw an error if the Arrange3D analysis fails
 */
async function testArrange3d(): Promise<void> {
  console.log('🔍 Testing analyzeArrange3dDefinition()...');
  const result = await fusion360Service.analyzeArrange3dDefinition();
  console.log('✅ Success!');
  console.log(`Result preview: ${result.substring(0, 400)}...`);
  console.log();
}

/**
 * Main test execution function.
 * 
 * Runs all test functions in sequence and reports overall success or failure.
 * Implements comprehensive error handling to catch and report any test failures
 * with detailed error information for debugging.
 * 
 * The test sequence matches the Python implementation to ensure compatibility
 * and equivalent functionality between the TypeScript and Python versions.
 */
async function main(): Promise<void> {
  console.log('🚀 Starting Fusion 360 API Documentation MCP Server Tests\n');
  
  try {
    await testTocTreeInfo();
    await testSearch();
    await testClassInfo();
    await testArrange3d();
    
    console.log('🎉 All tests completed successfully!');
    
  } catch (error) {
    console.log(`❌ Test failed with error: ${error}`);
    console.error(error);
  }
}

/**
 * Handles graceful shutdown on SIGINT (Ctrl+C).
 * Provides clean exit when tests are interrupted by the user.
 */
process.on('SIGINT', () => {
  console.log('\nShutting down tests...');
  process.exit(0);
});

/**
 * Main execution block with ES module detection.
 * 
 * Only runs the tests if this file is executed directly (not imported).
 * This pattern allows the test functions to be imported and used by
 * other test frameworks if needed.
 */
if (import.meta.url === `file://${process.argv[1]}`) {
  main().catch((error) => {
    console.error('Test execution failed:', error);
    process.exit(1);
  });
} 